package continuum.cucumber;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.StringWriter;
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
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;
import javax.sound.midi.Receiver;

import org.apache.commons.io.IOUtils;
import org.testng.Reporter;


	
	import java.text.DateFormat;
	import java.text.SimpleDateFormat;
	import java.util.Calendar;
	import java.util.TimeZone;

import javax.mail.Address;
import javax.mail.Authenticator;
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
	public class HtmlEmailSender {
		 
	    public static void sendEmail(final String userName, final String password, String reciever,
	            String subject, String message, File report)
	         {
	         try{
	        // sets SMTP server properties
	        Properties properties = new Properties();
	        properties.setProperty("mail.smtp.host",Utilities.getMavenProperties("emailHost"));
	        properties.setProperty("mail.smtp.port", Utilities.getMavenProperties("emailPort"));
	        properties.setProperty("mail.smtp.auth", "true");
	        
	        properties.setProperty("mail.smtp.starttls.enable", "true");
	        properties.setProperty("mail.smtp.EnableSSL.enable","true");
	        properties.setProperty("mail.smtp.ssl.trust",Utilities.getMavenProperties("emailHost"));
	    	

	       
	        // creates a new session with an authenticator
	        Authenticator auth = new Authenticator() {
	            public PasswordAuthentication getPasswordAuthentication() {
	                return new PasswordAuthentication(userName, password);
	            }
	        };
	        
//	        Session session = Session.getInstance(properties, new javax.mail.Authenticator() {
//				protected PasswordAuthentication getPasswordAuthentication() {
//					return new PasswordAuthentication(userName, password);
//				}
//			});
	 
	       Session session = Session.getInstance(properties, auth);
	 
	        // creates a new e-mail message
	        Message msg = new MimeMessage(session);
	 
	        msg.setFrom(new InternetAddress(userName));
	      
			msg.setRecipients(Message.RecipientType.TO, InternetAddress.parse(reciever));
			
//			if(reciever.contains(";"))
//			{
//				 
//		          String []reciverArray=Utilities.splitString(reciever);
//		          Address[] toAddresses={new InternetAddress()};
//		          for(int i=0;i<reciverArray.length-1;i++)
//		          {
//		        	     toAddresses[i]=new InternetAddress(reciverArray[i]);
//		          }
//		                 msg.setRecipients(Message.RecipientType.TO,toAddresses);
//			}   
//		          
//		    else
//		          {  
//	                 InternetAddress[] toAddress = { new InternetAddress(reciever)};
//	                 msg.setRecipients(Message.RecipientType.TO, toAddress);
//		          }
	        msg.setSubject(subject);
	        msg.setSentDate(new Date());
	       
	 
	        addReportToMailBody(msg, report);
	        Transport.send(msg);
	 

			} catch (MessagingException e) {
				throw new SkipException("Unable to Send Email : " + e.getMessage());
			}
			
		}
	    public static void addReportToMailBody(Message msg,File report) throws MessagingException{
			 
	   	 StringWriter writer = new StringWriter();
	   	 try {
	   		IOUtils.copy(new FileInputStream(report), writer);
	   	      msg.setContent(writer.toString(), "text/html");
	   	 } catch (IOException e) {
	   		System.out.println("Not able to retrive cucumber report file");
	   			e.printStackTrace();
	   		}
	   	 }
}

			
		
			

