package com.Runner;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;

import com.adactinsite.baseclass.BaseClass;
import com.adactinsite.helper.File_Reader_Manager;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

import com.cucumber.listener.ExtentCucumberFormatter;

@RunWith(Cucumber.class)
@CucumberOptions(

		features = "src\\test\\java\\com\\adactin\\feature\\Adactin.feature",
		
		glue = "com.Sd",
		
		monochrome = true ,
		
		dryRun = false,
		
		strict = true,
		
		tags = ("~@Ad4"),
		
		plugin =  {
				
				"html:Report/Cucumber_Report",
				
				"json:Report/Jsonreport.json" ,
				
				//"pretty" ,// prints in console 
			
	// "com.aventstack.extentreports.cucumber.adapter.ExtentCucumberAdapter:"				
		
			"com.cucumber.listener.ExtentCucumberFormatter:Reports/Ext.html"
		
		}
			
)
public class Test_Runner {

	public static WebDriver driver; // ----> null

	@BeforeClass
	public static void set_Up() throws Throwable {

		String browser = File_Reader_Manager.getInstance().getInstanceCR().get_Browser();

		driver = BaseClass.getDriver(browser);

	}

	@AfterClass
	public static void tear_Down() {

		driver.close();

	}

}
