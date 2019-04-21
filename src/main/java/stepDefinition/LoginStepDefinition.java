package stepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

@SuppressWarnings("deprecation")
public class LoginStepDefinition {
	
	WebDriver driver ;
	
	@Given("^user launch the CRMPRO Login page$")
    public void user_launch_login_page() {
		
		System.setProperty("webdriver.chrome.driver", "D:\\program file\\selenium programs\\chromedriver.exe");
		driver =new ChromeDriver();
		driver.get("https://www.crmpro.com");	
    }
	
	
	
	@When("^title of page is CRMPRO$")
public void When_Title_is_CRMRO() {
		String tit =driver.getTitle();
		System.out.println(tit);
		Assert.assertEquals("CRMPRO - CRM software for customer relationship management, sales, and support.", tit);
		
	}
	
	@Then("^user enters \\\"(.*)\\\" and \\\"(.*)\\\"$")
	public void user_enter_user_name_and_password(String un ,String pass) {
	    driver.findElement(By.name("username")).sendKeys(un);
	    driver.findElement(By.name("password")).sendKeys(pass); 
	}
	@Then("^user clicks login button$")
	public void user_click_login_button() throws InterruptedException {
		Thread.sleep(2000);
	    driver.findElement(By.xpath("//input[@value='Login']")).click();
	}
	
	
	@Then("^user is in home page$")
	public void user_is_in_home_page() {
		String Title =driver.getTitle();
		System.out.println(Title);
		Assert.assertEquals("CRMPRO", Title);
		
	}
	
	@Then("^user mouseover contacts link and click on new contact$")
	public void user_mouseover_contacts_link_and_click_on_new_contact() {
	    driver.switchTo().frame("mainpanel");
	   Actions act =new Actions(driver);
	   act.moveToElement(driver.findElement(By.xpath("//a [@title='Contacts']"))).build().perform();
	   driver.findElement(By.xpath("//a [@title='New Contact']")).click();
	}
	@Then("^user enters contact details\"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_contact_details_and_and(String ftname, String lstname, String pos){
	   driver.findElement(By.id("first_name")).sendKeys(ftname);
	   driver.findElement(By.id("surname")).sendKeys(lstname);
	   driver.findElement(By.id("company_position")).sendKeys(pos);
	   driver.findElement(By.xpath("//input[@value='Save']")).click();
	}
	 
	
	@Then("^close the browser$")
	public void close_the_browser() {
		driver.quit();
	}
	
}
