package runner;

import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;




@RunWith(Cucumber.class)
@CucumberOptions (features ="C:\\Users\\ghadeermoh\\eclipse-workspace\\CRMBDDFramework\\src\\main\\java\\Features\\Deals .feature"
,glue ="stepDefinition" , format= {"pretty","html:test output"}
,dryRun=false
,monochrome=true
,strict=true
		)

public class TestRunnerclass {

}
