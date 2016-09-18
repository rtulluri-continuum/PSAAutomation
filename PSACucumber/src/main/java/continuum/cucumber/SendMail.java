package continuum.cucumber;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.util.Date;
import java.util.Properties;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;

import javax.activation.DataHandler;
import javax.activation.DataSource;
import javax.activation.FileDataSource;
import javax.mail.Message;
import javax.mail.Multipart;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;

import org.testng.Reporter;


	
	import java.text.DateFormat;
	import java.text.SimpleDateFormat;
	import java.util.Calendar;
	import java.util.TimeZone;

	import javax.mail.BodyPart;
	import javax.mail.Message;
	import javax.mail.MessagingException;
	import javax.mail.Multipart;
	import javax.mail.PasswordAuthentication;
	import javax.mail.Session;
	import javax.mail.Transport;
	import javax.mail.internet.InternetAddress;
	import javax.mail.internet.MimeBodyPart;
	import javax.mail.internet.MimeMessage;
	import javax.mail.internet.MimeMultipart;

	import org.testng.SkipException;

	import continuum.cucumber.Utilities;

	public class SendMail {

	    /**
		 * Send Mail to Specified Recipient
		 * 
		 * @param message
		 * @param receiver
		 * @param sender
		 * @param senderPass
		 * @param html
		 * @param htmlDetail
		 */
		public String sendMail(String sender, String receiver, String subject,
				String messageBody, String senderPass) {
			
			final String username = sender;
			final String password = senderPass;
			String currentDate;
			String key1="UserName";
			String key2="Password";
			String excelFileName = "DemoSprint.xlsx";
			String TestCaseID = "1234";
			
			sender=Utilities.getKeyValue(excelFileName, TestCaseID, key1);
			senderPass=Utilities.getKeyValue(excelFileName, TestCaseID, key2);
		
			java.util.Properties props = System.getProperties();
			props.put("mail.smtp.auth", "true");
			props.put("mail.smtp.starttls.enable", "true");
			props.put("mail.smtp.host", Utilities.getMavenProperties("mailSmtp.host"));
			props.put("mail.smtp.port", Utilities.getMavenProperties("mailSmtp.port"));

			Session session = Session.getInstance(props,
					new javax.mail.Authenticator() {
				protected PasswordAuthentication getPasswordAuthentication() {
					return new PasswordAuthentication(username, password);
				}
			});

			try {
				MimeMessage message = new MimeMessage(session);
				BodyPart messageBodyPartSummery = new MimeBodyPart();
				message.setFrom(new InternetAddress(username));
				message.setRecipients(Message.RecipientType.TO,
						InternetAddress.parse(receiver));
				message.setSubject(subject);
				messageBodyPartSummery.setContent(messageBody, "text/html");
				Multipart multipart = new MimeMultipart();

				multipart.addBodyPart(messageBodyPartSummery);

				message.setContent(multipart);
				Transport.send(message);
				System.out.println("Done");
				Calendar cal = Calendar.getInstance();
				DateFormat sdf = new SimpleDateFormat("dd/MM/yyyy hh:mm:ss a");
				sdf.setTimeZone(TimeZone.getTimeZone("IST"));
				currentDate = sdf.format(cal.getTime());

			} catch (MessagingException e) {
				throw new SkipException("Unable to Send Email : " + e.getMessage());
			}
			return currentDate;
		}
}

			
		
			

