package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import junit.framework.Assert;

public class DashboardPage {

	WebDriver driver;

	public DashboardPage(WebDriver driver) {
		this.driver = driver;
	}

	@FindBy(how = How.XPATH, using = "//span[text()='Bank & Cash']")
	WebElement bankAndCash;
	@FindBy(how = How.XPATH, using = "//a[text()='New Account']")
	WebElement newAccount;
	@FindBy(how = How.XPATH, using = "//h2[text()=' Accounts ']")
	WebElement Accounts;

	public void clickBankAndCashButton() {

		bankAndCash.click();
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {

			e.printStackTrace();
		}

	}

	public void clickNewAccountButton() {
		newAccount.click();
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}

	public void validationOfAccountsPage(String expectedText) {

		Assert.assertEquals("Page not Found", expectedText, Accounts.getText());
	}

}