import{u as r,o as n,c as d,a as o,t as e,f as _}from"./index-2bbcae90.js";const i={class:"modal-item__content"},m={class:"modal__body recovery-alert"},p={class:"recovery-alert__body"},v={class:"recovery-alert__info"},y={class:"recovery-alert__actions"},u=o("span",{class:"icon icon--close"},null,-1),b={__name:"RecoveryAlertModal",props:["modal"],setup(t){const a=t,c=r(),l=()=>c.removeModal(a.modal.id);return(s,h)=>(n(),d("div",i,[o("div",m,[o("div",p,[o("span",null,e(s.$t("recovery.alert.new_password")),1),o("b",null,e(a.modal.data.password),1)]),o("div",v,e(s.$t("recovery.alert.copy")),1),o("div",y,[o("button",{onClick:l,class:"recovery-alert__action-close"},[_(e(s.$t("modals.close"))+" ",1),u])])])]))}};export{b as default};
