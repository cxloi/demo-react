export const getPaymentHtmlWithScripts = (TXN_REQ: string, KEY_ID: string, HMAC: string) => `
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />
    <title>Merchant Page</title>
    <script
      src="https://uat2.enets.sg/GW2/js/jquery-3.1.1.min.js"
      type="text/javascript"
    ></script>
    <script src="https://uat2.enets.sg/GW2/pluginpages/env.jsp"></script>
    <script
      type="text/javascript"
      src="https://uat2.enets.sg/GW2/js/apps.js"
    ></script>
    <script>
    function sendPayloadFunc() {
      const txnReq = "${TXN_REQ}";
      const keyId = "${KEY_ID}";
      const hmac = "${HMAC}";

      sendPayLoad(txnReq, hmac, keyId); 
    }

    // window.onload = function () {
    //   const txnReq = "${TXN_REQ}";
    //   const keyId = "${KEY_ID}";
    //   const hmac = "${HMAC}";

    //   sendPayLoad(txnReq, hmac, keyId); 
    // }

    // window.addEventListener('load', 
    // function() {
    //   const txnReq = "${TXN_REQ}";
    //   const keyId = "${KEY_ID}";
    //   const hmac = "${HMAC}";

    //   sendPayLoad(txnReq, hmac, keyId); 
    // }, false);

    // window.onresize = function() {
    //   alert(window.onload)
    // }
  </script>
  </head>
  <body>
    <input type="hidden" id="txnReq" name="txnReq" value="${TXN_REQ}" />
    <input type="hidden" id="keyId" name="keyId" value="${KEY_ID}" />
    <input type="hidden" id="hmac" name="hmac" value="${HMAC}" />

    <div id="anotherSection">
      <fieldset>
        <div id="ajaxResponse"></div>
      </fieldset>
    </div>

    <script>sendPayloadFunc()</script>
  </body>
</html>
`;

export const getPaymentHtmlWithScriptsHeader = () => `
  <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />
  <title>Merchant Page</title>
  <script
    src="https://uat2.enets.sg/GW2/js/jquery-3.1.1.min.js"
    type="text/javascript"
  ></script>
  <script src="https://uat2.enets.sg/GW2/pluginpages/env.jsp"></script>
  <script
    type="text/javascript"
    src="https://uat2.enets.sg/GW2/js/apps.js"
  ></script>
`;

export const getPaymentHtmlWithScriptsBody = (TXN_REQ: string, KEY_ID: string, HMAC: string) => `
  <input type="hidden" id="txnReq" name="txnReq" value="${TXN_REQ}" />
  <input type="hidden" id="keyId" name="keyId" value="${KEY_ID}" />
  <input type="hidden" id="hmac" name="hmac" value="${HMAC}" />
  <input type="hidden" id="onLoadSendPayloadFunc" onLoad="sendPayloadFunc()" />

  <div id="anotherSection">
    <fieldset>
      <div id="ajaxResponse"></div>
    </fieldset>
  </div>
  <script>
    function sendPayloadFunc() {
      const txnReq = "${TXN_REQ}";
      const keyId = "${KEY_ID}";
      const hmac = "${HMAC}";

      sendPayLoad(txnReq, hmac, keyId); 
    };
  </script>
`;
