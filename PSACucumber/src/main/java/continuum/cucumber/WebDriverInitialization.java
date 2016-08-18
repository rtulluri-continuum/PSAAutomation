package continuum.cucumber;

import java.io.File;
import java.net.URL;
import java.util.Arrays;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.LocalFileDetector;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.testng.Reporter;

public class WebDriverInitialization {
	
	

	static String absolutePath=new File("").getAbsolutePath();
	static String IEDriverLocation=absolutePath+"\\drivers\\IEDriverServer.exe";
	static String ChromeDriverLocation=absolutePath+"\\drivers\\chromedriver.exe";
	
	public static RemoteWebDriver createInstance(RemoteWebDriver driver) {
		String browserName= Utilities.getMavenProperties("browser");
		System.out.println("Browsername:"+ browserName);
		String hubURL =  Utilities.getMavenProperties("hubUrl");
		
		DesiredCapabilities capabilities = new DesiredCapabilities();
        
		if (browserName.toLowerCase().equalsIgnoreCase("FIREFOX")) {
            //driver = new FirefoxDriver();
        	capabilities = DesiredCapabilities.firefox();
        	
        }
        
		else if (browserName.toLowerCase().equalsIgnoreCase("IE")) {
    		
    		capabilities = DesiredCapabilities.internetExplorer();
    		capabilities.setCapability(InternetExplorerDriver.ENABLE_PERSISTENT_HOVERING,false);
    		capabilities.setCapability(InternetExplorerDriver.REQUIRE_WINDOW_FOCUS,false);
    		
    		capabilities.setCapability("ignoreProtectedModeSettings", true);
    		capabilities.setCapability(CapabilityType.ACCEPT_SSL_CERTS, true);   
    	
    		System.setProperty("webdriver.IE.driver", IEDriverLocation);
    		
          }
        
		else if (browserName.toLowerCase().equalsIgnoreCase("CHROME")) {
			System.out.println("Chrome driver location"+ChromeDriverLocation);
        	System.setProperty("webdriver.chrome.driver", ChromeDriverLocation);
        	capabilities = DesiredCapabilities.chrome();
        	capabilities.setCapability(CapabilityType.ACCEPT_SSL_CERTS, true);
        	
          }
        try{
			
			driver = new RemoteWebDriver(new URL(hubURL),capabilities);
		  }
		catch(Exception e){
			e.printStackTrace();
			System.out.println("Unable to launch browser instance due to following exception : "+e.getMessage());}
		
//		((RemoteWebDriver)driver).setFileDetector(new LocalFileDetector());
		driver.manage().window().maximize();
		
       return driver;

       }
	
}
