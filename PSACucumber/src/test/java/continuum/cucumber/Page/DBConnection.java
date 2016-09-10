package continuum.cucumber.Page;

import java.sql.Connection;

import continuum.cucumber.DatabaseUtility;
import continuum.cucumber.Utilities;

public class DBConnection {
	
	static DatabaseUtility db=new DatabaseUtility();
	
    static String DBName=Utilities.getMavenProperties("DBName");
    static String DBServerUrl=Utilities.getMavenProperties("DBName");
    static String DBUsername=Utilities.getMavenProperties("DBName");
    static String DBPwd=Utilities.getMavenProperties("DBName");
    
	public static void runQuery(){
		Connection conn=db.createConnection(DBName, DBServerUrl, DBUsername, DBPwd);
		String query="select top 10 ticketid, TicketAction ,[subject],[Errordesc],[from],[to],[cc],ticketid,* from E2tmailreceivedetails_History with(nolock) order by id desc";
		DatabaseUtility.executQuery(conn, query);
	}

}
