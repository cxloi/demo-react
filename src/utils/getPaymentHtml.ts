export const getPaymentHtml = (TXN_REQ: string, KEY_ID: string, HMAC: string) => `
  <input type="hidden" id="txnReq" name="txnReq" value="${TXN_REQ}" />
  <input type="hidden" id="keyId" name="keyId" value="${KEY_ID}" />
  <input type="hidden" id="hmac" name="hmac" value="${HMAC}" />

  <div id="anotherSection">
    <fieldset>
      <div id="ajaxResponse"></div>
    </fieldset>
  </div>
`;

export const getGatewayHostedHtml = (TXN_REQ: any, KEY_ID: string, HMAC: string) => `
<form 
  id="eNETSRedirectForm"
  name="eNETSRedirectForm" 
  action='https://uat2.enets.sg/GW2/TxnReqListenerToHost' 
  method='POST'
>
  <input type="hidden" id="payload" name="payload" value="${TXN_REQ}"> 
  <input type="hidden" id="apiKey" name="apiKey" value='${KEY_ID}'>
  <input type="hidden" id="hmac" name="hmac" value='${HMAC}'>
</form>
`;
