package continuum.cucumber.stepDefinations;


import static org.testng.AssertJUnit.assertEquals;

import java.sql.Connection;
import java.util.List;

import org.openqa.selenium.WebDriver;
import org.testng.Reporter;

import continuum.cucumber.DatabaseUtility;
import continuum.cucumber.DriverFactory;
import continuum.cucumber.Utilities;
import continuum.cucumber.WebDriverInitialization;
import continuum.cucumber.Page.DBConnection;

import continuum.cucumber.Page.PageFactory;

import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.Scenario;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Given;

public class StepDefinations extends PageFactory {
	
	private String nocTicket=null;
	private String connectwiseTicket=null;
	
	


	@Given("^User is login to Connectwise portal$")
	public void user_is_login_to_ConnectWise_portal() throws Throwable {
		Reporter.log("Log in to connectwise application");	
       connectwisePage.loginToconnectwise(Utilities.getMavenProperties("Connectwise_Company"),Utilities.getMavenProperties("Connectwise_UserName"),Utilities.getMavenProperties("Connectwise_Password"));
       

	}

	@Given("^User is login to NOC portal$")
	public void user_is_login_to_NOC_portal() throws Throwable {
	
		Reporter.log("Log in to NOC application");	
		nocHomePage.loginToNocPortal(Utilities.getMavenProperties("NOC_UserName"),Utilities.getMavenProperties("NOC_Password"));
	}
	


	@When("^User is able to create ticket in NOC portal for \"([^\"]*)\", \"([^\"]*)\",\"([^\"]*)\" with status in \"([^\"]*)\"$")
	public void user_is_able_to_create_ticket_in_NOC_portal_for_with_status_in(String member, String site, String resource, String datasheet) throws Throwable {
      
      nocHomePage.gotToGenerateTicket();
     nocTicket=nocTicketPage.createTicket(member,site,resource,datasheet);
      
	}

	@Then("^Veirfy ticket created in Database$")
	public void veirfy_ticket_created_in_Database() throws Throwable {
	   Reporter.log("Verify ticket created in database");
	  connectwiseTicket=nocTicketPage.getConnectwiseTicketNoFromDB(nocTicket);

	}
	
	
	
	


	@When("^User is able to create ticket in ConnectWise portal for \"([^\"]*)\", \"([^\"]*)\"$")
	public void user_is_able_to_create_ticket_in_ConnectWise_portal_for_with_status_in(String company, String board) throws Throwable {
	      connectwisePage.gotToServiceTicket();
		  connectwiseTicket=connectwisePage.createTicket(company, board);
		  setConnectwiseTicket(connectwiseTicket);
		  Reporter.log("Connectwise ticketid : "+connectwiseTicket);
		  System.out.println("Connectwise ticketid : "+connectwiseTicket);
	}

	@Then("^Verify ticket created in PSA Database$")
	public void veirfy_ticket_created_in_PSA_Database() throws Throwable {
		Reporter.log("Verify ticket created in database");
		 nocTicket=connectwisePage.getNocTicketNoFromDB(connectwiseTicket);
		 setNocTicket(nocTicket);
	}



@Then("^Verify same ticket is created in NOC$")
public void verify_same_ticket_is_created_in_NOC() throws Throwable {
	nocHomePage.loginToNocPortal(Utilities.getMavenProperties("NOC_UserName"),Utilities.getMavenProperties("NOC_Password"));
	nocHomePage.goToQuickReports();
//	 nocTicket="201609140000034";
	nocHomePage.verifyTicketonNoc(nocTicket);
}

@When("^Update ticket status on Connectwise portal \"([^\"]*)\"$")
public void update_ticket_status_on_Connectwise_portal(String connectwiseStatus ) throws Throwable {
	//connectwiseTicket="27616";
    connectwisePage.updateStatusinConnectwise(getConnectwiseTicket(),connectwiseStatus);
}

@Then("^Verify corresponding status is updated on NOC portal \"([^\"]*)\"$")
public void verify_corresponding_status_is_updated_on_NOC_portal(String nocStatus) throws Throwable {

	// nocTicket="201609140000034";
    System.out.println("NOC status: "+nocStatus);
    nocHomePage.verifyStatusOnNOC(getNocTicket(),nocStatus);
}




private String getNocTicket() {
	return nocTicket;
}

private void setNocTicket(String nocTicket) {
	this.nocTicket = nocTicket;
}

private String getConnectwiseTicket() {
	return connectwiseTicket;
}

private void setConnectwiseTicket(String connectwiseTicket) {
	this.connectwiseTicket = connectwiseTicket;
}

	

	
}
