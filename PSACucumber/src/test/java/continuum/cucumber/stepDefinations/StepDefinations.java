package continuum.cucumber.stepDefinations;


import static org.testng.AssertJUnit.assertEquals;

import java.sql.Connection;
import java.util.List;

import org.openqa.selenium.WebDriver;
import org.testng.Reporter;

import continuum.cucumber.DatabaseUtility;
import continuum.cucumber.DriverFactory;
import continuum.cucumber.Utilities;
import continuum.cucumber.Page.DBConnection;
import continuum.cucumber.Page.LoginPage;
import continuum.cucumber.Page.PageFactory;

import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.Scenario;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Given;

public class StepDefinations extends PageFactory {
	
	String nocTicket=null;
	String connectwiseTicket=null;
	
	
	
	@Given("^User is able to login to NOC portal with \"([^\"]*)\", \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_is_able_to_login_to_NOC_portal(String emailId,String pwd,String env) throws Throwable {
		if(Utilities.getMavenProperties("Environment").equalsIgnoreCase(env)){
			loginPage.openApplication();;
		    loginPage.loginToNocPortal(emailId, pwd);
		}
		else
		{
			System.out.println("******WRONG ENVIRONMENT*********");
			throw new PendingException();
		}
	}

	@When("^User is able to create ticket in NOC portal for \"([^\"]*)\", \"([^\"]*)\",\"([^\"]*)\" with status in \"([^\"]*)\"$")
	public void user_is_able_to_create_ticket_in_NOC_portal_for_with_status_in(String member, String site, String resource, String datasheet) throws Throwable {
      homePage.closePopup();
      
      homePage.gotToGenerateTicket();
     nocTicket=nocTicketPage.createTicket(member,site,resource,datasheet);
      
	}

	@Then("^Veirfy ticket created in Database$")
	public void veirfy_ticket_created_in_Database() throws Throwable {
	   Reporter.log("Verify ticket created in database");
	 // connectwiseTicket=nocTicketPage.getConnectwiseTicketNoFromDB(nocTicket);

	}

	@Then("^Verify same ticket is created in PSA-ConnectWise$")
	public void verify_same_ticket_is_created_in_PSA_ConnectWise() throws Throwable {
		Reporter.log("Verify ticket in PSA connectwise");
		connectwisePage.openConnectwiseApplication();
		connectwisePage.loginToconnectwise();
	}

	@Then("^Verify status is updated accodring to status mapped in sheet \"([^\"]*)\"$")
	public void verify_status_is_updated_accodring_to_status_mapped_in_sheet(String arg1) throws Throwable {
		Reporter.log("Verify ticket status updated");
		connectwisePage.closeApplication();
	}

	

	
}
