import{o as a,c as l,a as o,t as i,u as n,b as d,g as r,l as e,n as p,h as g}from"./index-88668a8e.js";const u={class:"modal__header"},m={class:"modal__title"},h={class:"modal__body login"},v={key:0,class:"login__types"},y={class:"login__type login__type--active"},b={class:"login__type"},f={class:"login__inputs"},$=["placeholder"],k=["placeholder"],M={class:"login__actions"},T={class:"login__actions__main-action"},B={class:"login__actions__social"},C={class:"login__actions__social__title"},L=g('<div class="login__actions__social__items"><button class="login__actions__social__item"><span class="icon icon--google"></span></button><button class="login__actions__social__item"><span class="icon icon--yandex"></span></button><button class="login__actions__social__item"><span class="icon icon--mailru"></span></button><button class="login__actions__social__item"><span class="icon icon--vk"></span></button></div>',1),N={class:"login__actions__sub-actions"},V={class:"login__actions__sub-action"},w={class:"login__actions__sub-action"},H={class:"login__actions__offer"},P=["innerHTML"],S=o("div",{class:"login__actions__offer__checkbox"},[o("input",{type:"checkbox"})],-1),E={__name:"LoginModal",props:["modal"],setup(c){const t=c;return(s,_)=>(a(),l("div",{class:p(["modal-item__content",{"modal-item__content--one":t.modal.data.hideTypePicker}])},[o("div",u,[o("div",m,i(s.$t("login.title")),1),o("button",{class:"modal__header__button-close",onClick:_[0]||(_[0]=z=>n(d)(t.modal.id))})]),o("div",h,[t.modal.data.hideTypePicker?r("",!0):(a(),l("div",v,[o("a",y,i(s.$t("login.login_type.client")),1),o("a",b,i(s.$t("login.login_type.designer")),1)])),o("div",f,[o("input",{class:"modal-input",type:"email",placeholder:s.$t("login.inputs.your_email")},null,8,$),o("input",{class:"modal-input",type:"password",placeholder:s.$t("login.inputs.your_password")},null,8,k)]),o("div",M,[o("button",T,i(s.$t("login.do_login")),1),o("div",B,[o("div",C,i(s.$t("login.social_login")),1),L]),o("div",N,[o("a",V,i(s.$t("login.do_recovery")),1),o("a",w,i(s.$t("login.do_register")),1)]),o("div",H,[o("div",{class:"login__actions__offer__text",innerHTML:s.$t("login.offer",{offer:n(e).offer,privacy:n(e).privacy})},null,8,P),S])])])],2))}};export{E as default};
