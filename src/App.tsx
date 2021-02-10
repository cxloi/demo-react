import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CustomButton } from 'demo-sb-react-components';
import CheckoutSuccess from 'pages/CheckoutSuccess';
import { TextField } from '@material-ui/core';
// import { getPaymentHtml } from 'utils/getPaymentHtml';
// import
// getPaymentHtmlWithScripts,
// getPaymentHtmlWithScriptsBody,
// getPaymentHtmlWithScriptsHeader,
// 'utils/getPaymentHtmlWithScripts';
// import { getGatewayHostedHtml } from 'utils/getPaymentHtml';

import UpdateUserProfile from './pages/UpdateUserProfile';

declare const window: any;

export default function App() {
  const [checkoutAmount, setCheckoutAmount] = useState('1000');
  // const [htmlString, setHtmlString] = useState('');
  // const [showPaymentHtml, setShowPaymentHtml] = useState(false);
  // const [txnReqObj, setTxnReqObj] = useState({ txnReq: null, keyId: null, hmac: null });

  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = 'https://uat2.enets.sg/GW2/js/jquery-3.1.1.min.js';
    // script1.async = true;
    script1.type = 'text/javascript';
    document.body.appendChild(script1);

    // const script2 = document.createElement('script');
    // const script3 = document.createElement('script');
    // const script4 = document.createElement('script');

    const setupPaymentHtml = async () => {
      const getTxnReqResp = await fetch('http://localhost:9091/getTxnReq?checkoutAmount=1000');
      const getTxnReqRespJson = await getTxnReqResp.json();
      console.log('sevin: ', getTxnReqRespJson);
      // setTxnReqObj(getTxnReqRespJson);

      // ======================================================================================
      // method 1: without scripts
      // const { txnReq, keyId, hmac } = getTxnReqRespJson;

      // script2.src = 'https://uat2.enets.sg/GW2/pluginpages/env.jsp';
      // // script2.async = true;
      // document.body.appendChild(script2);

      // script3.src = 'https://uat2.enets.sg/GW2/js/apps.js';
      // // script3.async = true;
      // script3.type = 'text/javascript';
      // document.body.appendChild(script3);

      // script4.type = 'text/javascript';
      // script4.innerHTML = `
      // window.onload = function () {
      //   sendPayLoad("${txnReq}", "${hmac}", "${keyId}");
      // }`;
      // document.body.appendChild(script4);

      // setHtmlString(getPaymentHtml(txnReq, keyId, hmac));

      // ======================================================================================
      // method 1B: without scripts
      // const { txnReq, keyId, hmac } = getTxnReqRespJson;
      // // const txnReqJson = await txnReq.json();
      // const htmlStringFormulated = getGatewayHostedHtml(unescape(txnReq), keyId, hmac);
      // console.log('htmlStringFormulated: ', htmlStringFormulated);
      // setHtmlString(htmlStringFormulated);

      // ======================================================================================
      // method 2: with scripts
      // const { txnReq, keyId, hmac } = getTxnReqRespJson;
      // setHtmlString(getPaymentHtmlWithScripts(txnReq, keyId, hmac));

      // ======================================================================================
      // method 3: open in new window and write to new window
      // const { txnReq, keyId, hmac } = getTxnReqRespJson;
      // const wnd = window.open('', '', '_blank');
      // if (wnd) {
      //   wnd.document.write(getPaymentHtmlWithScripts(txnReq, keyId, hmac));
      //   // wnd.document.head.innerHTML = getPaymentHtmlWithScriptsHeader();
      //   // wnd.document.body.innerHTML = getPaymentHtmlWithScriptsBody(txnReq, keyId, hmac);
      // }
    };

    setupPaymentHtml();

    return () => {
      document.body.removeChild(script1);
      //   document.body.removeChild(script2);
      //   document.body.removeChild(script3);
      //   document.body.removeChild(script4);
    };
  }, []);

  // useEffect(() => {
  //   if (htmlString !== '') {
  //     window.$('#eNETSRedirectForm').submit();
  //   }
  // }, [htmlString]);

  // useEffect(() => {
  //   const { txnReq, keyId, hmac } = txnReqObj;

  //   const script4 = document.createElement('script');

  //   if (txnReq && keyId && hmac) {
  //     script4.type = 'text/javascript';
  //     // script4.innerHTML = `
  //     // document.getElementById("payment-html-div").onload = function () {
  //     //   sendPayLoad("${txnReq}", "${hmac}", "${keyId}");
  //     // }`;
  //     script4.innerHTML = `
  //     window.onload = function () {
  //       sendPayLoad("${txnReq}", "${hmac}", "${keyId}");
  //     }`;
  //   }

  //   document.body.appendChild(script4);

  //   setShowPaymentHtml(true);

  //   return () => {
  //     document.body.removeChild(script4);
  //   };
  // }, [txnReqObj]);

  return (
    <Router>
      <TextField
        label="Checkout Amount"
        onChange={(event) => setCheckoutAmount(event.target.value)}
        value={checkoutAmount}
      />
      <CustomButton
        label="Checkout"
        onClick={() => {
          window.location.href = `http://localhost:9091/checkout?checkoutAmount=${checkoutAmount}`;
        }}
      />

      {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
      <Switch>
        <Route exact path="/">
          <div>
            {/* <div
              id={'payment-html-div"'}
              dangerouslySetInnerHTML={{
                __html: htmlString,
              }}
            /> */}
            {/* <iframe
              style={{ height: 500, width: 500 }}
              srcDoc={htmlString}
              title="payment html iframe"
            /> */}
          </div>
        </Route>
        <Route path="/update-user-profile">
          <UpdateUserProfile />
        </Route>
        <Route path="/checkout-success">
          <CheckoutSuccess />
        </Route>
      </Switch>
    </Router>
  );
}
