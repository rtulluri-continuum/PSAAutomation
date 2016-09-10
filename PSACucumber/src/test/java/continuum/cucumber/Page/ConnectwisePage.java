package continuum.cucumber.Page;

import org.openqa.selenium.WebDriver;

import continuum.cucumber.Locator;
import continuum.cucumber.Utilities;
import continuum.cucumber.WebdriverWrapper;

public class ConnectwisePage {
	WebdriverWrapper wd= new WebdriverWrapper();
	WebDriver chromeDriver=null;
	
	public Locator companyTB= new Locator("Company text box", "company","id");
	public Locator userName= new Locator("Login User name textbox", "username","id");
	public Locator passwordTB= new Locator("Login password text box", "password","id");
	public Locator loginBtn= new Locator("Login button", "loginBtn","id");
	
	public void openConnectwiseApplication() {
		// TODO Auto-generated method stub
		String url=Utilities.getMavenProperties("ConnectwiseApplicationUrl");
		chromeDriver=wd.openNewWebdriver(chromeDriver,"CHROME",url);
		wd.switchDriver(chromeDriver);
		
		
		
	}
	
	public void loginToconnectwise(){
		
		wd.clearandSendKeys("continuum_f", companyTB);
		wd.clearandSendKeys("admin1",userName );
		wd.clearandSendKeys("abcd@12345",passwordTB );
		wd.clickElement(loginBtn);
		wd.waitForPageLoad();
		wd.waitFor(3000);
		
	}

	public void closeApplication() {
	wd.closeApplication();
		
	}

}
