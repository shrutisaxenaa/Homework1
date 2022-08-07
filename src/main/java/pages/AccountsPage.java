package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class AccountsPage {
	
	WebDriver driver;
	
	public AccountsPage(WebDriver driver) {
		this.driver=driver;
	}
	
	
	@FindBy(how=How.ID,using="account")WebElement AccountTitle;
	@FindBy(how=How.ID,using="description" )WebElement Description;
	@FindBy(how=How.ID,using="balance")WebElement InitialBalance;
	@FindBy(how=How.ID,using="account_number")WebElement AccountNumber;
	@FindBy(how=How.ID,using="contact_person")WebElement ContactPerson;
	@FindBy(how=How.ID,using="contact_phone")WebElement PhoneNum;
	@FindBy(how=How.XPATH,using="//button[@type='submit' and @class='btn btn-primary']")WebElement submitButton;


	public void insertAccountTitle(String accountTitle) {
		AccountTitle.sendKeys(accountTitle);
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}

	public void insertDescription(String description) {
		Description.sendKeys(description);
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
	
	public void insertInitialBalance(String initialBalance) {
		InitialBalance.sendKeys(initialBalance);
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
	
	public void insertAccountNumber(String accountNumber) {
		AccountNumber.sendKeys(accountNumber);
	}
	
	public void insertContactPerson(String contactPerson) {
		ContactPerson.sendKeys(contactPerson);
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
	
	public void insertPhoneNum(String phoneNumber) {
		PhoneNum.sendKeys(phoneNumber);
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
	
	public void clickSubmitButton() {
		submitButton.click();
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
}