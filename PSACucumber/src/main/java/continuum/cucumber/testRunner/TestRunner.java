package continuum.cucumber.testRunner;
import java.io.File;

import org.junit.runner.RunWith;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.testng.Reporter;
import org.testng.annotations.AfterClass;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

import continuum.cucumber.DriverFactory;
import continuum.cucumber.GenerateReport;
import continuum.cucumber.HtmlEmailSender;
import continuum.cucumber.SeleniumServerUtility;
import continuum.cucumber.Utilities;
import continuum.cucumber.WebDriverInitialization;
import cucumber.api.testng.TestNGCucumberRunner;
import cucumber.api.testng.TestNgReporter;
import cucumber.api.CucumberOptions;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;
import cucumber.api.testng.CucumberFeatureWrapper;
import cucumber.api.testng.TestNGCucumberRunner;

@RunWith(Cucumber.class)
@CucumberOptions(
monochrome = true,
features = "src//test//resources//features",
glue="continuum.cucumber.stepDefinations",
plugin = {
"pretty",
"html:test-report/cucumber",
"json:test-report/cucumber.json",
"rerun:target/rerun.txt" },
tags={"@PSATest3"}
)
public class TestRunner {
private TestNGCucumberRunner testNGCucumberRunner;
private static String scenarioName=null;
static RemoteWebDriver driver=null;

@BeforeClass(alwaysRun = true)
public void setUpClass() throws Exception {
	
    testNGCucumberRunner = new TestNGCucumberRunner(this.getClass());
}

@BeforeTest(alwaysRun = true)
		public void beforeTest()
		{
	String browserName= Utilities.getMavenProperties("PSAbrowser").toUpperCase();
	 driver=WebDriverInitialization.createInstance(driver,browserName);
 	 
	   DriverFactory.setWebDriver(driver);

		}

@Test(groups="cucumber", description = "Runs Cucumber Feature", dataProvider = "features")
public void feature(CucumberFeatureWrapper cucumberFeature) {
	
	scenarioName=cucumberFeature.getCucumberFeature().getPath();
	
	System.out.println("**************Executing scenario *********"+scenarioName+"on url"+ Utilities.getMavenProperties("NOC_DTapplicationUrl"));
//	System.out.println("**************Executing scenario *********"+cucumberFeature.getCucumberFeature().getPath());
    testNGCucumberRunner.runCucumber(cucumberFeature.getCucumberFeature());
   
}

@DataProvider
public Object[][] features() {
	
		   return testNGCucumberRunner.provideFeatures();
}

@AfterTest(alwaysRun = true)
public void afterTest(){
	DriverFactory.getDriver().quit();
	if(DriverFactory.getDriver2()!=null)
		DriverFactory.getDriver2().quit();
}


@AfterClass(alwaysRun = true)
public void tearDownClass() throws Exception {
    testNGCucumberRunner.finish();
    GenerateReport.generateReport();
 	HtmlEmailSender.sendReport();
 	
}

public static String getScenarioName(){
	return scenarioName;
}
}
