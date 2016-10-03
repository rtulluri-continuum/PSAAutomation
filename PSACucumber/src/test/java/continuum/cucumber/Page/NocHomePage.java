package continuum.cucumber.Page;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import org.testng.Reporter;

import continuum.cucumber.DriverFactory;
import continuum.cucumber.Locator;
import continuum.cucumber.Utilities;
import continuum.cucumber.WebdriverWrapper;

public class NocHomePage {

	
	WebdriverWrapper wd=new WebdriverWrapper();
	
	public Locator closeBtnPopup= new Locator("Close btn on popup","//div[@id='highslide-wrapper-0']/div/div/div/div/ul/li[4]/a"); 
	public Locator managementTab=new Locator("management Tab","//table[@id='dm0m0i1it']//td[@id='dm0m0i1tdT']");
	public Locator ticketsTab= new Locator("Tickets tab ","//table[@id='dm0m4tbl']//td[@id='dm0m4i2tdT']");
	public Locator ticketsTabHighlighted= new Locator("Tickets tab ","//table[@id='dm0m0i1it']//td[@class='dmText2']");
	public Locator generateTicket=new Locator("Generate New ticket btn","//table[@class='dmSubmenu']//table[@id='dm0m6i2td']//td[contains(text(),' Generate New Ticket ')]");
	public Locator management= new Locator("Management dropdown", ".//*[@id='dm0m0i8tdT']/div");
	public Locator quickreports= new Locator("Quick reports", "//table[@id='dm0m0i5it']//td[@id='dm0m0i5tdT']/div");
	public Locator ticketreport=new Locator("Ticket Report link","//table[@class='dmSubmenu']//td[@id='dm0m30i0tdT']");
	public Locator ticketidbox=new Locator("Ticket Id input box","//td[8]//input");
	public Locator ticketStatus=new Locator("Ticket status","//");
	public Locator ticketLink=new Locator("Ticket link","//table");
	public Locator view=new Locator("View Button","Button1","id");
	public Locator FrameName=new Locator("Click on Frame","frameTaskComments","Name");
	public Locator NewLink=new Locator("New Link","//tr[2]/td//tr[2]/td[1]//td[1]/a");
	public Locator manualTriag= new Locator("Manual Triage Link", ".//*[@id='dm0m12i0tdT']");
	public Locator clickChkbox=new Locator("Click on Check box","//html//tr[1]/td/input[1]");
	public Locator clickSubmit=new Locator("Click on Submit button","buttReadNotes","id");
	public Locator tabManagement=new Locator("Click on Management link","//table//td[2]/div[contains(text(),'Management')]");
    public Locator editUserframe=new Locator("Edit user frame","frmEditUser","id");
    public Locator emailId= new Locator("Login email id textbox", "//input[@name='txtUser']");
	public Locator password= new Locator("Login password text box", "//input[@name='txtPassword']");
	public Locator loginBtn= new Locator("Login button", "Submit","id");
   
	WebDriver ieDriver=null;
	static Boolean ieOpen=false;
	//public Locator rememberMeCheckbox=new Locator("Remember me checkbox","//span[@class='cust_checkbox checkbox cust_checkbox_off']");
	
public void startNOCApplication(){
		
		String url=Utilities.getMavenProperties("NOC_DTapplicationUrl");
	    String br=Utilities.getMavenProperties("browser2");
		ieDriver=wd.openNewWebdriver(ieDriver,br,url);
		ieOpen=true;
	}

	public void loginToNocPortal(String emaild, String pwd){
		if(ieOpen==false)
		{
	     startNOCApplication();
         wd.switchDriver(ieDriver);
         wd.waitFor(9000);
		}
		if(wd.findElementPresent(emailId))
		{
         Reporter.log("Enter login credentials  to ITS portal");
        
	 	 wd.sendKeys(emaild, emailId);
		 wd.sendKeys(pwd, password);

		 wd.clickElement(loginBtn);
		 wd.waitFor(2000);
		 closePopup();
		}		
         else
        	 System.out.println("Noc application is already open");
	}

	
	

	
	
		public void closePopup() {
			wd.waitFor(9000);
		//	wd.switchToFrame(editUserframe);
			//wd.waitForElementToBeClickable(closeBtnPopup, 3000);
			wd.clickElement(closeBtnPopup);
			wd.waitFor(2000);
			if(wd.findElementPresent(closeBtnPopup))
				wd.clickUsingJavaScript(closeBtnPopup);
			
		}
		
		public void gotToGenerateTicket(){
			wd.waitFor(2000);
			
			 wd.mouseHoverAndClick(managementTab);
			wd.waitFor(3000);
			//  ((JavascriptExecutor)wd.getWebdriver()).executeScript(javaScript,wd.getWebElement(ticketsTab));
			wd.mouseHoverAndClick(ticketsTab); 
			wd.waitFor(3000);
			//System.out.print("Clicking on generate ticket tab");
			wd.clickUsingJavaScript(generateTicket);
			wd.waitFor(2000);
		}

		public void goToQuickReports() {
			wd.waitFor(2000);
//			wd.clickElement(quickreports);
//			wd.waitFor(500);
//	    	wd.mouseHover(ticketreport);
//	    	wd.clickElement(ticketreport);
			wd.mouseHoverAndClick(quickreports);
			wd.waitFor(1000);
			wd.clickElement(ticketreport);
			wd.waitFor(1000);
	    	wd.switchToNewWindow();
	    	wd.waitFor(3000);
	    	
		}
		
		public void verifyTicketonNoc(String ticketId)
		{
			wd.waitFor(5000);
	    	wd.sendKeys(ticketId, ticketidbox);
	    	  wd.clickElement(view);
	    	wd.waitFor(3000);
	        Assert.assertEquals(wd.findElementPresent(ticketLink),true,"Ticket is present on NOC");
	        wd.getWebdriver().close();
	        
	       
			
		}

		public void verifyStatusOnNOC(String nocTicket,String nocStatus) {
			wd.switchDriver(DriverFactory.getDriver2());
			wd.waitFor(5000);
			wd.sendKeys(nocTicket, ticketidbox);
	        wd.clickElement(view);
	        wd.waitFor(2000);
	        wd.switchToFrame(FrameName);
	        wd.waitFor(2000);
	        wd.clickElement(NewLink);
	        wd.waitImplicit(3000);
	        wd.switchToNewWindow();
	        wd.waitFor(2000);
	        wd.clickElement(ticketLink);
	        wd.waitFor(2000);
	        wd.switchToNewWindow();
	      //  wd.clickElement(clickChkbox);
	        wd.waitFor(2000);
	        //wd.clickElement(clickSubmit);
	        wd.dismissAlert(3000);
	        String ticket_status=wd.getText(ticketStatus);
	        if(nocStatus.contains(","))
	        {
	        	String[] status=Utilities.splitString(nocStatus);
	        	if(status[0].equalsIgnoreCase(ticket_status) ||status[1].equalsIgnoreCase(ticket_status) )
	        	    Reporter.log("Ticket Status is correctly updated on NOC");
	        	else
	        		Assert.fail("Ticket Status is not correctly updated on NOC");
	        }
	        else
			{
	        	Assert.assertEquals(ticket_status, nocStatus,"Ticket Status is correctly updated on NOC");
			}
		}

}
