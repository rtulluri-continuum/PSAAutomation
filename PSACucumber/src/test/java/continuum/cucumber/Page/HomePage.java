package continuum.cucumber.Page;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import org.testng.Reporter;



import continuum.cucumber.Locator;
import continuum.cucumber.Utilities;
import continuum.cucumber.WebdriverWrapper;

public class HomePage {

	
	WebdriverWrapper wd=new WebdriverWrapper();
	
	public Locator closeBtnPopup= new Locator("Close btn on popup","//li[@class='highslide-close']"); 
	public Locator managementTab=new Locator("management Tab","//table[@id='dm0m0i1it']//td[@id='dm0m0i1tdT']");
	public Locator managementTabHiglighted=new Locator("management Tab highighted","//table[@id='dm0m0i1it']//td[@class='dmTextTop2']");
	public Locator ticketsTab= new Locator("Tickets tab ","//table[@id='dm0m5i2it']//td[@id='dm0m5i2tdT']");
	public Locator ticketsTabHighlighted= new Locator("Tickets tab ","//table[@id='dm0m0i1it']//td[@class='dmText2']");
	public Locator generateTicket=new Locator("Generate New ticket btn","//table[@class='dmSubmenu']//table[@id='dm0m7i2it']//td[contains(text(),'Generate New Ticket ')]");
	

		public void closePopup() {
			wd.waitFor(3000);
			wd.clickElement(closeBtnPopup);
			
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

}
