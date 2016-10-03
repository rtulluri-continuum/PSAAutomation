package continuum.cucumber;

import java.util.ArrayList;
import java.util.List;

import org.testng.TestListenerAdapter;
import org.testng.xml.XmlSuite;
import org.testng.xml.XmlTest;

import com.beust.testng.TestNG;

import continuum.cucumber.testRunner.TestRunner;

public class Main {

	
	
	public static void main(String []args){
		System.out.println("Creating Testng file");

		String executionGroup = Utilities.getMavenProperties("group");
		List<Class> testngListners = new ArrayList<Class>();
		testngListners.add(ListnerWebDriver.class);
		testngListners.add(org.uncommons.reportng.HTMLReporter.class);
		
		testngListners.add(org.uncommons.reportng.HTMLReporter.class);
		 
		    TestNG testng = new TestNG();
		    testng.initializeSuitesAndJarFile();
		    testng.setListenerClasses(testngListners);
		    XmlSuite suite = new XmlSuite();
		    XmlTest Test = new XmlTest(suite);

	    if(executionGroup!=null &&!(executionGroup.isEmpty()) ){
	    	if(executionGroup.length()==1){
	    		Test.addIncludedGroup(executionGroup);
	    	}
	    	else{
	    		String groupsExecList[]=executionGroup.split(",");
	    		for (String groupsExec : groupsExecList) {
	    			   Test.addIncludedGroup(groupsExec);
				}
	    		
	    	   }
	    }
	    
		testng.run(); 
	}
}
