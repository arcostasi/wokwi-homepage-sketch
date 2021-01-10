import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Copyright from '../src/Copyright';
import MenuAppBar from '../src/Menu';

export default function PrivacyPolicy() {
  return (
    <Container>
      <MenuAppBar/>
      <Box my={10}>
        <Typography variant="h5" gutterBottom>
          Wokwi Terms of Service and Privacy Policy
        </Typography>
        <Typography paragraph gutterBottom>
          Last updated: Feb 1, 2020
        </Typography>
        <Typography variant="h6" gutterBottom>
          Privacy Policy
        </Typography>
        <Typography paragraph>
          Wokwi (the "Application") is a Web application offered for online access through web browsers. The Application is provided by CodeMagic LTD, incorporated in Israel (the "Application Developer", "us" or "we"). The service is provided for individuals that look to learn Arduino and embedded device programming (the "User" or "you"). This Privacy Policy defines which information we collect about the User.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Information we collect
        </Typography>
        <Typography paragraph>
          The Application does not collect or send any kind of personally identifiable information, except for the following: Full name and email address. For users who signed in with the social network account, the Application may also store a link to their profile photo, as well as their user identifier on the social network. For users who submit any form of payment we also store the payment information as re ceived from the payment gateway, which includes the full name of the user and their billing address. The email address of the users is used for sending periodic progress reports and updates to the users. In some cases our product management team may contact individual users to inquery about their experience using the Application and to collect their feedback about the Application. Users may decide to opt-out from email communication at any time. The name and the profile photo of the user are used for personalization of the Application's user interface.
        </Typography>
        <Typography paragraph>
          The Application may collect activity data for actions performed within the Application (such as clicking any of the buttons or running code in the simulated environment) using Google Analytics, Facebook Analytics, FullStory, and Google BigQuery. The activity data will be stored alongside an identifier which uniquely idenitifes the User.
        </Typography>
        <Typography paragraph>
          This activity data is used to create reports about the use of the Application. We always strive to make the Application better, and we use this information as a basis for improving the Application. Google, FullStory, and Facebook store this information. Some of this information is also stored in Google Cloud BigQuery for further analysis. See Google's privacy policy, FullStory's privacy policy and Facebook's privacy policy.
        </Typography>
        <Typography paragraph>
          Some of the user sessions are recorded by FullStory, a third party service used by our product management team to understand the users are using the Application, which difficulting they encounter, and improve the user interface of the Application to make it easier to navigate. Users may decide to opt-out of session recording by sending a request to support@wokwi.com. The recorded data is normally retained for a period of 1 months, and individual recording can be deleted by sending a request to support@wokwi.com.
        </Typography>
        <Typography paragraph>
          The information about the users is stored in a database called Firestore, a part of the Google Cloud Platform. You can review their security policies in Google Cloud Platform's Security Whitepaper, and refer to Google Cloud's Terms of Use and Data Processing and Security Terms.
        </Typography>
        <Typography variant="h6">
          Where the information is processed
        </Typography>
        <Typography paragraph>
          The Application Developer is based in Israel. No matter where you are located, you consent to the processing and transferring of your information in and to the Israel, the U.S. and other territories.
        </Typography>
        <Typography variant="h6">
          Data Retention
        </Typography>
        <Typography paragraph>
          We generally retain our Users' data as long as they use our service, and for a period of at least one year after the Application has been last used by the User. We may automatically remove data for Users who have been inactive for a period of one year or more, from time to time, or anonymize this data. Data may persist in copies made for backup purposes for additional time.
        </Typography>
        <Typography variant="h6">
          Requesting a copy of your data
        </Typography>
        <Typography paragraph>
          Users can request a copy of the data we store for their account any time, by contacting our support team through support@wokwi.com. We may require users to provide additional proofs of identity in order to process their request. The data will be provided in computer-readable format, such as a JSON, CSV or an XML file.
        </Typography>
        <Typography variant="h6">
          Requesting deletion of your data
        </Typography>
        <Typography paragraph>
          Users can request their data to be removed from our database, by contacting our support team through support@wokwi.com and identifying themselves as the owners of the respective user account. We may require users to provide additional proofs of identity in order to process their request. Once we have verified the identity of the user, we will remove all the data related to their user account from our database.
        </Typography>
        <Typography variant="h6">
          Third Party Links
        </Typography>
        <Typography paragraph>
          Occasionally, at our discretion, we may include or offer third party products or services on our website. These third party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites.
        </Typography>
        <Typography variant="h6">
          Children's Personal Information
        </Typography>
        <Typography paragraph>
          We do not knowingly collect any personal information from children under the age of 13. If you are under the age of 13, please refrain from submitting any personal information in the Application. We will promptly delete any personal information related to individuals under the age of 13 if we discover such information or upon receiving any report about such information.
        </Typography>
        <Typography variant="h6">
          Business Transactions, Mergers and Acquisitions
        </Typography>
        <Typography paragraph>
          In an event that we (or any of our assets) are acquired by another person or company (the Acquiring Entity), whether by merger, acquisition, bankruptcy or otherwise, we may assign or transfer this Policy, as well as your account and related information, records, and data, including any personal information, to Acquiring Entity.
        </Typography>
        <Typography variant="h6">
          Warranty & Limitation of Liability disclaimers
        </Typography>
        <Typography paragraph>
          THE APPLICATION DEVELOPER PROVIDES THE SOFTWARE AND THE SERVICES "AS IS" WITHOUT WARRANTY OF ANY KIND EITHER EXPRESS, IMPLIED OR STATUTORY, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. ALL RISK OF QUALITY AND PERFORMANCE OF THE SOFTWARE OR SERVICES REMAINS WITH YOU. BY INSTALLING OR USING THIS APPLICATION, YOU AGREE TO THE TERMS PROVIDED IN THIS DISCLAIMER AND THE FOLLOWING LIMITATION OF LIABILITY DISCLAIMER.
        </Typography>
        <Typography paragraph>
          IN NO EVENT WILL THE APPLICATION DEVELOPER, ITS EMPLOYEES, DISTRIBUTORS, DIRECTORS OR AGENTS BE LIABLE FOR ANY INDIRECT DAMAGES OR OTHER RELIEF ARISING OUT OF YOUR USE OR INABILITY TO USE THE SOFTWARE OR SERVICES INCLUDING, BY WAY OF ILLUSTRATION AND NOT LIMITATION, LOST PROFITS, LOST BUSINESS OR LOST OPPORTUNITY, OR ANY INDIRECT, SPECIAL, INCIDENTAL OR CONSEQUENTIAL OR EXEMPLARY DAMAGES, INCLUDING LEGAL FEES, ARISING OUT OF SUCH USE OR INABILITY TO USE THE PROGRAM, EVEN IF THE APPLICATION DEVELOPER HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES, OR FOR ANY CLAIM BY ANY OTHER PARTY. BECAUSE SOME STATES OR JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR THE LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, IN SUCH STATES OR JURISDICTIONS, THE APPLICATION DEVELOPER'S LIABILITY SHALL BE LIMITED TO THE EXTENT PERMITTED BY LAW.
        </Typography>
        <Typography variant="h6">
          Changes to our Terms & Conditions / Privacy Policy
        </Typography>
        <Typography paragraph>
          Any future changes to this document will be posted on this page.
        </Typography>
        <Copyright />
      </Box>
    </Container>
  );
}
