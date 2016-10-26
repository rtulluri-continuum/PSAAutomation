package continuum.cucumber.Page;

import java.sql.Connection;

import org.openqa.selenium.WebDriver;
import org.testng.Reporter;

import continuum.cucumber.DatabaseUtility;
import continuum.cucumber.DriverFactory;
import continuum.cucumber.Locator;
import continuum.cucumber.Utilities;
import continuum.cucumber.WebdriverWrapper;

public class ConnectwisePage {
	WebdriverWrapper wd= new WebdriverWrapper();
	
	
	public Locator companyTB= new Locator("Company text box", "company","id");
	public Locator userName= new Locator("Login User name textbox", "username","id");
	public Locator passwordTB= new Locator("Login password text box", "password","id");
	public Locator loginBtn= new Locator("Login button", "loginBtn","id");
	public Locator serviceTicketTab=new Locator("Service ticket tab","//div[contains(text(),'Service Desk')]");
	public Locator serviceTicketSearch=new Locator("Service ticket search","//div[contains(text(),'Service Ticket Search')]");
	public Locator newServiceTicket=new Locator("Service ticket tab","//div[contains(text(),'New Service Ticket')]");
	public Locator loadingIcon= new Locator("LoadingIcon", "//div[@class='cw-loading-image cw-loading-spinner']");
	public Locator pageLoadingIcon=new Locator("page loading icon","//div[contains(@class,'cw-loading-spinner-child cw-loading-spinner1')]");
	public Locator ticketSummary=new Locator("ticket summary tb","//input[contains(@class,'cw_PsaSummaryHeader')]");
	public Locator companyDropDown=new Locator("company dropdown","//input[contains(@class,'cw_company')]");
	public Locator broardDropdown=new Locator("board dropdown","//input[contains(@class,'cw_serviceBoard')]");
	public Locator statusDropDown=new Locator("status dropdown","//div[contains(@class,'mm_comboBox')]//input[contains(@class,'cw_status')]");
	public Locator notesTextArea=new Locator("notes text area","//div[contains(@class,'mm_textArea')]/textarea");
	public Locator saveBtn=new Locator("save btn","//div[contains(@class,'cw_ToolbarButton_Save')]//div[contains(@class,'mm_buttonIcon')]");
	//public Locator notesPopup=new Locator("notes popup","//div[contains(@class,'cw-gxt-wnd')]");
	public Locator closeNotesPopup=new Locator("close btn on notes poup","//div[contains(@class,'cw-gxt-wnd')]//img[contains(@class,'gwt-Image cw-gxt-wnd-cls')]");
	public Locator ticketId=new Locator("ticket id","//div[contains(@class,'detailLabel cw_CwLabel')]");
	public Locator ticketSearchBox=new Locator("ticket search box","//input[contains(@id,'SR_Service_RecID-input')]");
	public Locator ticketSearchBtn=new Locator("ticket search btn","//div[contains(@class,'mm_button')]//div[contains(text(),'Search')]");
	public Locator loginAccount=new Locator("login account details","//div[contains(@class,'cw_MyAccountButton')]");
	
   WebDriver chromeDriver=null;

	

	
	public void loginToconnectwise(String company, String username, String password){
		chromeDriver=DriverFactory.getDriver();
		wd.switchDriver(chromeDriver);
		if(!wd.findElementPresent(loginAccount))
		{
		wd.openApplication(Utilities.getMavenProperties("ConnectwiseApplicationUrl"));
			
		wd.clearandSendKeys(company, companyTB);
		wd.clearandSendKeys(username,userName );
		wd.clearandSendKeys(password,passwordTB );
		wd.clickElement(loginBtn);

		waitTillApplicationLoad();
		}
	}

	

	public void waitTillApplicationLoad() {
		
		wd.waitFor(30000);
		wd.waitForElementToInvisible(loadingIcon,60000);
		wd.waitForElementToInvisible(pageLoadingIcon,60000);
		wd.waitFor(30000);
		//wd.waitForPageLoad();
	}

	public void gotToServiceTicket() {
		Reporter.log("Navigating to service ticket tab");
		wd.clickElement(serviceTicketTab);
		wd.bringElementInView(newServiceTicket);
		wd.clickElement(newServiceTicket);
	}

	public String createTicket(String company, String board) {
		Reporter.log("Creating ticket on Connectwise");
		wd.waitFor(3000);
		wd.sendKeys("Test automation ticket", ticketSummary);
        wd.clearandSendKeys(company, companyDropDown);
		wd.waitFor(3000);
		wd.clearandSendKeys(board, broardDropdown);
		wd.waitFor(2000);
		
		wd.bringElementInView(notesTextArea);
		wd.clearandSendKeys("Automation testing ticket", notesTextArea);
		wd.bringElementInView(statusDropDown);
		wd.waitFor(1500);
		wd.clearandSendKeys("Assigned to NOC", statusDropDown);
		wd.waitFor(2000);
		
	//	
		wd.clickElement(saveBtn);
		wd.waitFor(6000);
	//	wd.waitForElementToBeDisplayed(closeNotesPopup,3000);
		if(wd.findElementPresent(closeNotesPopup))
		           wd.clickElement(closeNotesPopup);
		String ticketLabel=wd.getText(ticketId);
		//Service Ticket #26251 - testing ticket
		int indexTicket=ticketLabel.indexOf("#");
		String ticket=ticketLabel.substring(indexTicket+1,indexTicket+6);
		Reporter.log("Ticket id on connectwise"+ticket);
		return ticket;
	}

	public String getNocTicketNoFromDB(String connectwiseTicket) {
		 Reporter.log("Waiting for Noc Ticket to be generate in DB");
		 String result=null;  
		 int i=0;
		    wd.waitFor(60000);
		    try{
		    	wd.waitFor(30000);
		   String databaseName= Utilities.getMavenProperties("DBName");
		   String sqlServerURL= Utilities.getMavenProperties("DBServerUrl");
		   String username= Utilities.getMavenProperties("DBUsername");
		   String password= Utilities.getMavenProperties("DBPwd");
		   do{
		    Connection conn=DatabaseUtility.createConnection(databaseName, sqlServerURL, username, password);
		    String query="Select TaskID,* from jmgttaskmanagement with(nolock) where GroupName='PSADTTM6' and CONNECTWISESRNO="+connectwiseTicket;
		    result=DatabaseUtility.executQuery(conn, query);
		    i++;
		   }while(i<3 && result!=null);
		    Reporter.log("Connectwise Ticket no from DB :"+result);
		    System.out.println("Result from db ="+result);
		   }catch(Exception e)
		   {
			   Reporter.log("Not able to fetch result from DB");
			    System.out.println("Not able to fetch result from DB");   
		   }
		    return result;

	}



	public void updateStatusinConnectwise(String connectwiseTicket,String connectwiseStatus) {
		wd.switchDriver(chromeDriver);
		wd.waitFor(3000);
	

		wd.bringElementInView(serviceTicketSearch);
		wd.waitFor(2000);
		wd.clickElement(serviceTicketSearch);
		wd.waitFor(3000);
		if(wd.isAlertPresent())
		          wd.acceptAlert();
		wd.waitFor(2000);
		wd.clearandSendKeys(connectwiseTicket, ticketSearchBox);
		wd.clickElement(ticketSearchBtn);
		wd.waitFor(5000);
	     wd.clickElement(closeNotesPopup);
		wd.waitFor(3000);
		wd.clearandSendKeys(connectwiseStatus, statusDropDown);
		wd.waitFor(2000);
		wd.clickElement(saveBtn);
		wd.waitFor(2000);
	}

//
//
//	public boolean isLogin() {
//		if(!wd.getWebdriver().equals(chromeDriver))
//		{
//			wd.switchDriver(chromeDriver);
//			wd.waitFor(2000);
//		}
//		if( wd.findElementPresent(loginAccount))
//		       return true;
//	    else
//		     return false;
//				
//	}



//	public void navigateToConnectwise() {
//		if(wd.getWebdriver().toString().contains("noc"))
//			   wd.switchDriver(chromeDriver);
//		String url="https://api-staging.connectwisedev.com/";
//		wd.getWebdriver().navigate().to(url);
//		
//	}

}
