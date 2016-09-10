package continuum.cucumber.Page;

import org.openqa.selenium.WebDriver;

import continuum.cucumber.DriverFactory;


public class PageFactory {

       
	//public static WebDriver driver=DriverFactory.getDriver();

	public LoginPage loginPage=new LoginPage();
	
	public HomePage homePage=new HomePage();
	public DBConnection dbConnectionPage=new DBConnection();
	public NOCGenerateTicketPage nocTicketPage=new NOCGenerateTicketPage();
    public ConnectwisePage connectwisePage= new ConnectwisePage();
}
