export default function (name: string, requestId: string, reason: string) {
    return `
    <!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="x-apple-disable-message-reformatting">
        <meta name="format-detection" content="telephone=no,address=no,email=no,date=no,url=no">

        <meta name="color-scheme" content="light">
        <meta name="supported-color-schemes" content="light">

        
        <!--[if !mso]><!-->
          
          <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap">
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap">

          <style type="text/css">
          // TODO: fix me!
            @import url(https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap);
        </style>
        
        <!--<![endif]-->

        <!--[if mso]>
          <style>
              // TODO: fix me!
              * {
                  font-family: sans-serif !important;
              }
          </style>
        <![endif]-->
    
        
        <!-- NOTE: the title is processed in the backend during the campaign dispatch -->
        <title></title>

        <!--[if gte mso 9]>
        <xml>
            <o:OfficeDocumentSettings>
                <o:AllowPNG/>
                <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
        </xml>
        <![endif]-->
        
    <style>
        :root {
            color-scheme: light;
            supported-color-schemes: light;
        }

        html,
        body {
            margin: 0 auto !important;
            padding: 0 !important;
            height: 100% !important;
            width: 100% !important;

            overflow-wrap: break-word;
            -ms-word-break: break-all;
            -ms-word-break: break-word;
            word-break: break-all;
            word-break: break-word;
        }


        
  direction: undefined;
  center,
  #body_table {
    
  }

  ul, ol {
    padding: 0;
    margin-top: 0;
    margin-bottom: 0;
  }

  li {
    margin-bottom: 0;
  }

  

  .list-block-list-outside-left li {
    margin-left: 20px !important;
  }

  .list-block-list-outside-right li {
    margin-right: 20px !important;
  }

  
    .paragraph {
      font-size: 15px;
      font-family: Open Sans, sans-serif;
      font-weight: normal;
      font-style: normal;
      text-align: start;
      line-height: 1;
      text-decoration: none;
      color: #5f5f5f;
      
    }
  

    .heading1 {
      font-size: 32px;
      font-family: Open Sans, sans-serif;
      font-weight: normal;
      font-style: normal;
      text-align: start;
      line-height: 1;
      text-decoration: none;
      color: #000000;
      
    }
  

    .heading2 {
      font-size: 26px;
      font-family: Open Sans, sans-serif;
      font-weight: normal;
      font-style: normal;
      text-align: start;
      line-height: 1;
      text-decoration: none;
      color: #000000;
      
    }
  

    .heading3 {
      font-size: 19px;
      font-family: Open Sans, sans-serif;
      font-weight: normal;
      font-style: normal;
      text-align: start;
      line-height: 1;
      text-decoration: none;
      color: #000000;
      
    }
  

    .list {
      font-size: 15px;
      font-family: Open Sans, sans-serif;
      font-weight: normal;
      font-style: normal;
      text-align: start;
      line-height: 1;
      text-decoration: none;
      color: #5f5f5f;
      
    }
  

  p a, 
  li a {
    
  display: inline-block;  
    color: #5457FF;
    text-decoration: none;
    font-style: normal;
    font-weight: normal;

  }

  .button-table a {
    text-decoration: none;
    font-style: normal;
    font-weight: normal;
  }

  .paragraph > span {text-decoration: none;}.heading1 > span {text-decoration: none;}.heading2 > span {text-decoration: none;}.heading3 > span {text-decoration: none;}.list > span {text-decoration: none;}


        * {
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
        }

        div[style*="margin: 16px 0"] {
            margin: 0 !important;
        }

        #MessageViewBody,
        #MessageWebViewDiv {
            width: 100% !important;
        }

        table {
            border-collapse: collapse;
            border-spacing: 0;
            mso-table-lspace: 0pt !important;
            mso-table-rspace: 0pt !important;
        }
        table:not(.button-table) {
            border-spacing: 0 !important;
            border-collapse: collapse !important;
            table-layout: fixed !important;
            margin: 0 auto !important;
        }

        th {
            font-weight: normal;
        }

        tr td p {
            margin: 0;
        }

        img {
            -ms-interpolation-mode: bicubic;
        }

        a[x-apple-data-detectors],

        .unstyle-auto-detected-links a,
        .aBn {
            border-bottom: 0 !important;
            cursor: default !important;
            color: inherit !important;
            text-decoration: none !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
        }

        .im {
            color: inherit !important;
        }

        .a6S {
            display: none !important;
            opacity: 0.01 !important;
        }

        img.g-img+div {
            display: none !important;
        }

        @media only screen and (min-device-width: 320px) and (max-device-width: 374px) {
            u~div .contentMainTable {
                min-width: 320px !important;
            }
        }

        @media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
            u~div .contentMainTable {
                min-width: 375px !important;
            }
        }

        @media only screen and (min-device-width: 414px) {
            u~div .contentMainTable {
                min-width: 414px !important;
            }
        }
    </style>

    <style>
        @media only screen and (max-device-width: 640px) {
            .contentMainTable {
                width: 100% !important;
                margin: auto !important;
            }
            .single-column {
                width: 100% !important;
                margin: auto !important;
            }
            .multi-column {
                width: 100% !important;
                margin: auto !important;
            }
            .imageBlockWrapper {
                width: 100% !important;
                margin: auto !important;
            }
        }
        @media only screen and (max-width: 640px) {
            .contentMainTable {
                width: 100% !important;
                margin: auto !important;
            }
            .single-column {
                width: 100% !important;
                margin: auto !important;
            }
            .multi-column {
                width: 100% !important;
                margin: auto !important;
            }
            .imageBlockWrapper {
                width: 100% !important;
                margin: auto !important;
            }
        }
    </style>
    <!--[if mso | IE]>
<style>
.button-_M4AvM5Xg4JHipAanCEg8 { padding: 16px; };
.button-_M4AvM5Xg4JHipAanCEg8 a { margin: -16px; }; 
.button-y4j3Zf2C4BYM1r76g5Qdv { padding: 16px 24px; };
.button-y4j3Zf2C4BYM1r76g5Qdv a { margin: -16px -24px; }; </style>
<![endif]-->
    
<!--[if mso | IE]>
    <style>
        .list-block-outlook-outside-left {
            margin-left: -18px;
        }
    
        .list-block-outlook-outside-right {
            margin-right: -18px;
        }

        a:link, span.MsoHyperlink {
            mso-style-priority:99;
            
  display: inline-block;  
    color: #5457FF;
    text-decoration: none;
    font-style: normal;
    font-weight: normal;

        }
    </style>
<![endif]-->


    </head>

    <body width="100%" style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly; background-color: #F5F6F8;">
        <center role="article" aria-roledescription="email" lang="en" style="width: 100%; background-color: #F5F6F8;">
            <!--[if mso | IE]>
            <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" id="body_table" style="background-color: #F5F6F8;">
            <tbody>    
                <tr>
                    <td>
                    <![endif]-->
                        <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="640" style="margin: auto;" class="contentMainTable">
                            <tr class="wp-block-editor-imageblock-v1"><td style="background-color:#ffffff;padding-top:0;padding-bottom:0;padding-left:0;padding-right:0" align="center"><table align="center" width="640" class="imageBlockWrapper" style="width:640px" role="presentation"><tbody><tr><td style="padding:0"><img src="https://api.smtprelay.co/userfile/a18de9fc-4724-42f2-b203-4992ceddc1de/n_hero-image1.jpg" width="640" height="" alt="" style="border-radius:0px;display:block;height:auto;width:100%;max-width:100%;border:0" class="g-img"></td></tr></tbody></table></td></tr><tr class="wp-block-editor-headingblock-v1"><td valign="top" style="background-color:#ffffff;display:block;padding-top:64px;padding-right:32px;padding-bottom:32px;padding-left:32px;text-align:center"><p style="font-family:Open Sans, sans-serif;text-align:center;line-height:36.80px;font-size:32px;background-color:#ffffff;color:#000000;margin:0;word-break:normal" class="heading1">Exeact Request</p></td></tr><tr class="wp-block-editor-paragraphblock-v1"><td valign="top" style="padding:0px 32px 32px 32px;background-color:#ffffff"><p class="paragraph" style="font-family:Open Sans, sans-serif;text-align:center;line-height:30.00px;font-size:15px;margin:0;color:#5f5f5f;word-break:normal">Your child ${name}, just made an exeact request.</p></td></tr><tr class="wp-block-editor-paragraphblock-v1"><td valign="top" style="padding:20px 20px 20px 20px;background-color:#ffffff"><p class="paragraph" style="font-family:Open Sans, sans-serif;text-align:center;line-height:NaNpx;font-size:15px;margin:0;color:#5f5f5f;letter-spacing:0;word-break:normal">Date: ${new Date().toLocaleDateString()}</p></td></tr><tr class="wp-block-editor-headingblock-v1"><td valign="top" style="background-color:#ffffff;display:block;padding-top:20px;padding-right:20px;padding-bottom:20px;padding-left:20px;text-align:center"><p style="font-family:Open Sans, sans-serif;text-align:center;line-height:NaNpx;letter-spacing:0;font-size:19px;background-color:#ffffff;color:#000000;margin:0;word-break:normal" class="heading3"><span style="display: inline-block;text-decoration: underline" class="underline"><span style="font-weight: bold" class="bold">Reason</span></span></p></td></tr><tr class="wp-block-editor-paragraphblock-v1"><td valign="top" style="padding:20px 20px 20px 20px;background-color:#ffffff"><p class="paragraph" style="font-family:Open Sans, sans-serif;text-align:center;line-height:NaNpx;font-size:15px;margin:0;color:#5f5f5f;letter-spacing:0;word-break:normal">${reason}</p></td></tr><tr class="wp-block-editor-paragraphblock-v1"><td valign="top" style="padding:20px 20px 20px 20px;background-color:#ffffff"><p class="paragraph" style="font-family:Open Sans, sans-serif;text-align:center;line-height:NaNpx;font-size:15px;margin:0;color:#5f5f5f;letter-spacing:0;word-break:normal">Click <span style="color:#38ff00"><span style="font-weight: bold" class="bold">YES</span></span> to accept, or <span style="color:#ff0000"><span style="font-weight: bold" class="bold">NO</span></span> to reject the request.</p></td></tr><tr><td style="padding-top:20px;padding-left:0;padding-right:0;padding-bottom:20px;background-color:#ffffff"><table role="presentation" class="multi-column" style="width:640px;border-collapse:collapse !important" cellpadding="0" cellspacing="0"><tbody><tr style="padding-top:20px;padding-left:0;padding-right:0;padding-bottom:20px" class="wp-block-editor-twocolumnsfiftyfiftyblock-v1"><td style="width:320px;float:left" class="wp-block-editor-column single-column"><table role="presentation" align="left" border="0" class="single-column" width="320" style="width:320px;float:left;border-collapse:collapse !important" cellspacing="0" cellpadding="0"><tbody><tr class="wp-block-editor-buttonblock-v1" align="center"><td style="background-color:#ffffff;padding-top:20px;padding-right:20px;padding-bottom:60px;padding-left:20px;width:100%" valign="top"><table role="presentation" cellspacing="0" cellpadding="0" class="button-table"><tbody><tr><td valign="top" class="button-_M4AvM5Xg4JHipAanCEg8 button-td button-td-primary" style="cursor:pointer;border:none;border-radius:4px;background-color:#38FF00;font-size:16px;font-family:Open Sans, sans-serif;width:fit-content;text-decoration:none;color:#ffffff;overflow:hidden"><a style="color:#ffffff;display:block;padding:16px 16px 16px 16px" href="http://localhost:3000/api/request/update?requestId=${requestId}&response=yes">YES</a></td></tr></tbody></table></td></tr></tbody></table></td><td style="width:320px;float:left" class="wp-block-editor-column single-column"><table role="presentation" align="right" border="0" class="single-column" width="320" style="width:320px;float:left;border-collapse:collapse !important" cellspacing="0" cellpadding="0"><tbody><tr class="wp-block-editor-buttonblock-v1" align="center"><td style="background-color:#ffffff;padding-top:20px;padding-right:20px;padding-bottom:20px;padding-left:20px;width:100%" valign="top"><table role="presentation" cellspacing="0" cellpadding="0" class="button-table"><tbody><tr><td valign="top" class="button-y4j3Zf2C4BYM1r76g5Qdv button-td button-td-primary" style="cursor:pointer;border:none;border-radius:4px;background-color:#FF0000;font-size:16px;font-family:Open Sans, sans-serif;width:fit-content;text-decoration:none;letter-spacing:0;color:#ffffff;overflow:hidden"><a style="color:#ffffff;display:block;padding:16px 24px 16px 24px" href="http://localhost:3000/api/request/update?requestId=${requestId}&response=no">NO</a></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr>
                        </table>
                    <!--[if mso | IE]>
                    </td>
                </tr>
            </tbody>
            </table>
            <![endif]-->
        </center>
    </body>
</html>
    `;
}