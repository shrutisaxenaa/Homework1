package steps;

import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import pages.AccountsPage;
import pages.DashboardPage;
import pages.LoginPage;
import pages.TestBase;

public class LoginStepDefination extends TestBase {

	LoginPage lp;
	DashboardPage dp;
	AccountsPage ap;

	
	@Before
	public void methodName() {
		initDriver();
		lp = PageFactory.initElements(driver, LoginPage.class);
		dp = PageFactory.initElements(driver, DashboardPage.class);
		ap= PageFactory.initElements(driver, AccountsPage.class);
	}

	@Given("^User is on the TechFios login page$")
	public void user_is_on_the_TechFios_login_page() {

		driver.get("https://techfios.com/billing/?ng=admin/");

	}

	@When("^User enters username as \"([^\"]*)\"$")
	public void user_enters_username_as(String userName) {

		lp.enterUserName(userName);

	}

	@When("^User  enters password as \"([^\"]*)\"$")
	public void user_enters_password_as(String password) {
		lp.enterPassword(password);

	}

	@When("^User clicks on the Submit button$")
	public void user_clicks_on_the_Submit_button() {
		lp.clickSignInButton();

	}

	@Then("^User should land on dashboard page$")

	public void user_should_land_on_dashboard_page() {
		lp.validationDashboardPage("Dashboard");
		takeScreenShot(driver);

	}

	// public void user_should_land_on_dashboard_page() {
	// Assert.assertEquals("Dashboard- iBilling", lp.getPageTitle());

	// }

	@When("^User clicks on Bank and Cash Button$")
	public void user_clicks_on_Bank_and_Cash_Button() {

		dp.clickBankAndCashButton();
	}

	@When("^User Clicks on New Account Button$")
	public void user_Clicks_on_New_Account_Button() {
		dp.clickNewAccountButton();
	}

	@Then("User Should Land on Accounts Page")
	public void user_should_land_on_accounts_page() {
		dp.validationOfAccountsPage("Accounts");
	}

	@When("^User enters AccountTitle as \"([^\"]*)\"$")
	public void user_enters_accountTitle_as(String accountTitle) {
		int randomNum=generateRandomNumber();
		ap.insertAccountTitle(accountTitle+randomNum);

	}

	@When("^User enters Description as \"([^\"]*)\"$")
	public void user_enters_description_as(String Description) {
		int randomNum=generateRandomNumber();
		ap.insertDescription(Description+randomNum);
	}

	@When("^User enters InitialBalance as \"([^\"]*)\"$")
	public void user_enters_initialBalance_as(String initialBalance) {
		ap.insertInitialBalance(initialBalance);
	}

	@When("^User enters AccountNumber as \"([^\"]*)\"$")
	public void user_enters_accountNumber_as(String accountNumber) {
		int randomNum=generateRandomNumber();
		ap.insertAccountNumber(accountNumber+randomNum);
	}

	@When("^User enters ContactPerson as \"([^\"]*)\"$")
	public void user_enters_contactPerson_as(String contactPerson) {
		int randomNum=generateRandomNumber();
		ap.insertContactPerson(contactPerson+randomNum);
	}

	@And("^User enters PhoneNumber as \"([^\"]*)\"$")
	public void user_enters_phoneNumber_as(String phoneNumber) {
		int randomNum=generateRandomNumber();
		ap.insertPhoneNum(phoneNumber+randomNum);
	}

	@Then("^User clicks on SubmitButton$")
	public void user_clicks_on_submitButton() {
		ap.clickSubmitButton();
	}

	@After
	public static void tearDown() {
		driver.close();
		driver.quit();
	}

}
