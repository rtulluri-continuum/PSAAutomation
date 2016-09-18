package continuum.cucumber.stepDefinations;

import java.util.HashMap;
import java.util.Map;
import java.util.Map.Entry;

import org.testng.Reporter;

import continuum.cucumber.Utilities;
import continuum.cucumber.Page.PageFactory;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ConnectwiseStepDefinations extends PageFactory {
	
//	String connectwiseTicket=null;
//	String nocTicket=null;
//	
//	
//	@Given("^User is able to login to ConnectWise portal$")
//	public void user_is_login_to_ConnectWise_portal() throws Throwable {
//			
//			Reporter.log("Log in to connectwise application");	
//	     connectwisePage.loginToconnectwise(Utilities.getMavenProperties("Connectwise_Company"),Utilities.getMavenProperties("Connectwise_UserName"),Utilities.getMavenProperties("Connectwise_Password"));
//		 connectwisePage.waitTillApplicationLoad();
//	
//		}
//
//
//	@When("^User is able to create ticket in ConnectWise portal for \"([^\"]*)\", \"([^\"]*)\"$")
//	public void user_is_able_to_create_ticket_in_ConnectWise_portal_for_with_status_in(String company, String board) throws Throwable {
//	      connectwisePage.gotToServiceTicket();
//		  connectwiseTicket=connectwisePage.createTicket(company, board);
//		  Reporter.log("Connectwise ticketid : "+connectwiseTicket);
//		  System.out.println("Connectwise ticketid : "+connectwiseTicket);
//	}
//
//	@Then("^Verify ticket created in PSA Database$")
//	public void veirfy_ticket_created_in_PSA_Database() throws Throwable {
////		Reporter.log("Verify ticket created in database");
////		 nocTicket=connectwisePage.getNocTicketNoFromDB(connectwiseTicket);
//	}
//
//
//
//@Then("^Verify same ticket is created in NOC$")
//public void verify_same_ticket_is_created_in_NOC() throws Throwable {
//	nocLoginPage.startNOCApplication();
//	nocLoginPage.loginToNocPortal(Utilities.getMavenProperties("NOC_UserName"),Utilities.getMavenProperties("NOC_Password"));
//	nocHomePage.closePopup();
//	nocHomePage.goToQuickReports();
//	 nocTicket="201609140000034";
//	nocHomePage.verifyTicketonNoc(nocTicket);
//}
//
//@When("^Update ticket status on Connectwise portal \"([^\"]*)\"$")
//public void update_ticket_status_on_Connectwise_portal(String connectwiseStatus ) throws Throwable {
//	connectwiseTicket="25743";
//    connectwisePage.updateStatusinConnectwise(connectwiseTicket,connectwiseStatus);
//}
//
//@Then("^Verify corresponding status is updated on NOC portal \"([^\"]*)\"$")
//public void verify_corresponding_status_is_updated_on_NOC_portal(String nocStatus) throws Throwable {
//	nocLoginPage.startNOCApplication();
//	nocLoginPage.loginToNocPortal(Utilities.getMavenProperties("NOC_UserName"),Utilities.getMavenProperties("NOC_Password"));
//	nocHomePage.closePopup();
//	 nocTicket="201609140000034";
//    System.out.println("NOC status: "+nocStatus);
//    nocHomePage.verifyStatusOnNOC(nocTicket,nocStatus);
//}
	
//	@Then("^Update ticket status of Connectwise ticket in sheet \"([^\"]*)\"$")
//	public void updateConnectwiseStatus(String datasheet) {
//		status=Utilities.readValidationsFromExcelFile(datasheet);
//		 for (Map.Entry<String,String> e : status.entrySet()) {
//               String connectwiseStatus = e.getKey();
//     		//String connectwiseStatus=getStatusFromSheet(datasheet,i);
//		     System.out.println("Connectwise status: "+connectwiseStatus);
//		    connectwiseTicket="25743";
//	        connectwisePage.updateStatusinConnectwise(connectwiseTicket,connectwiseStatus);
//		 }
//	}
//
//
//	@Then("^Verify ticket status is updated in NOC according to status mapped in sheet \"([^\"]*)\"$")
//	public void verify_status_is_updated_according_to_status_mapped_in_sheet(String datasheet)  {
//		nocLoginPage.startNOCApplication();
//		nocLoginPage.loginToNocPortal(Utilities.getMavenProperties("NOC_UserName"),Utilities.getMavenProperties("NOC_Password"));
//		nocHomePage.closePopup();
//    	nocHomePage.goToQuickReports();
//    	 nocTicket="201609140000034";
// 	 //   String nocStatus = status.get(connectwiseStatus);
//// 	    System.out.println("NOC status: "+nocStatus);
////    	nocHomePage.verifyTicketonNoc(nocTicket);   
////		nocHomePage.verifyStatusOnNOC(nocTicket,nocStatus);
//		
//	}

}
