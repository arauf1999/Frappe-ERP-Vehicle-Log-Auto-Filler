function visible(e){return !!(e.getClientRects().length&&getComputedStyle(e).visibility!=="hidden")}
chrome.runtime.onMessage.addListener((msg,sender,sendResponse)=>{
 if(msg.type==="INSPECT_PAGE"){
  const inputs=[...document.querySelectorAll("input,select,textarea,[role=combobox]")].filter(visible).map((e,i)=>({index:i,tag:e.tagName,type:e.type||"",name:e.name||"",id:e.id||"",placeholder:e.placeholder||"",aria:e.getAttribute("aria-label")||"",value:e.value||""}));
  const buttons=[...document.querySelectorAll("button,[role=button],input[type=submit]")].filter(visible).map(e=>(e.innerText||e.value||e.getAttribute("aria-label")||"").trim()).filter(Boolean);
  sendResponse({title:document.title,url:location.origin+location.pathname,frappe:!!(window.frappe||document.querySelector("[data-page-route]")),inputs,buttons}); return;
 }
 if(msg.type==="CREATE_DRAFT"){sendResponse({saved:false,verified:false,status:"Blocked safely",error:"ERP-specific draft creation is not enabled until the exact DocType, fieldnames, Link fields, and child-grid behavior are verified. No changes made."});}
});