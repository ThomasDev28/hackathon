(this.webpackJsonphackathon1=this.webpackJsonphackathon1||[]).push([[0],{21:function(e,t,c){},22:function(e,t,c){},23:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(15),a=c.n(s),i=(c(21),c(8)),r=(c(22),c(2)),l=(c(23),c(0));function j(){Object(r.g)();var e=Object(r.f)(),t=function(t){window.scroll(0,0),e.push("/cartes/".concat(t))};return Object(l.jsxs)("div",{className:"container-destination",children:[Object(l.jsx)("img",{onClick:function(){return t("mercure")},src:"img/mercure.jpg",alt:"mercure"}),Object(l.jsx)("img",{onClick:function(){return t("venus")},src:"img/venus.jpg",alt:"venus"}),Object(l.jsx)("img",{onClick:function(){return t("earth")},src:"https://blog.iakaa.com/wp-content/uploads/2014/10/google-earth-1.jpg",alt:"earth"}),Object(l.jsx)("img",{onClick:function(){return t("mars")},src:"img/mars.jpg",alt:"mars"}),Object(l.jsx)("img",{onClick:function(){return t("jupiter")},src:"https://www.astrofiles.net/sites/default/files/2019-05/jupiter.png",alt:"jupiter"}),Object(l.jsx)("img",{onClick:function(){return t("saturn")},src:"https://www.neozone.org/blog/wp-content/uploads/2020/11/saturne-001-1-780x470.jpg",alt:"saturn"}),Object(l.jsx)("img",{onClick:function(){return t("neptune")},src:"img/neptune.jpg",alt:"neptune"}),Object(l.jsx)("img",{onClick:function(){return t("uranus")},src:"img/uranus.jpg",alt:"uranus"})]})}function o(){return Object(l.jsxs)("div",{className:"home_container",children:[Object(l.jsx)("div",{className:"img_earth",children:Object(l.jsx)("img",{className:"rotate_earth",src:"img/earth_entire_m-p-800_0.png",alt:"terre vue de l'espace"})}),Object(l.jsxs)("div",{className:"home_text",children:[Object(l.jsx)("h1",{className:"home_title",children:"HOME"}),Object(l.jsxs)("p",{className:"home_p",children:["Star Home offers a planetary overview experience ",Object(l.jsx)("br",{}),"that will reconnect Humans and the stars"]})]}),Object(l.jsx)(j,{})]})}c(33),c(34),c(35);function u(e){var t=e.PopupVisibleClick;return Object(l.jsx)("div",{className:"container-popup",children:Object(l.jsxs)("div",{className:"mon-popup",children:[Object(l.jsx)("i",{onClick:t,id:"croix",className:"fas fa-times"}),Object(l.jsx)("div",{className:"popup-texte",children:Object(l.jsx)("p",{children:"Pers\xe9verance et Ingenuity avons bien re\xe7u votre requete. Nous esperons vous voir tres bientot pour nous tenir compagnie"})}),Object(l.jsx)("div",{className:"container-img",children:Object(l.jsx)("img",{src:"img/robot.png",alt:"robot"})})]})})}var b=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(""),r=Object(i.a)(a,2),j=r[0],o=r[1],b=Object(n.useState)(""),m=Object(i.a)(b,2),d=m[0],h=m[1],O=Object(n.useState)(""),x=Object(i.a)(O,2),p=x[0],f=x[1],g=Object(n.useState)(!1),v=Object(i.a)(g,2),N=v[0],C=v[1],k=function(){var e=new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z]{2,4}$");console.log(e.test(j)),c.length>=4&&e.test(j)?(C(!0),o(""),s(""),h(""),f("")):N?C(!1):alert('Veuillez remplir les champs requis correctement "*"')};return Object(l.jsxs)("form",{className:"contact-form",children:[Object(l.jsx)("h2",{children:"Contactez nous les Terriens !"}),Object(l.jsxs)("div",{className:"form-content",children:[Object(l.jsx)("input",{type:"text",name:"name",onChange:function(e){return s(e.target.value)},placeholder:"nom * (4 caract\xe8res minimum)",value:c}),Object(l.jsx)("input",{type:"text",name:"sexe",placeholder:"sexe ",onChange:function(e){return f(e.target.value)},value:p}),Object(l.jsx)("input",{type:"text",name:"phone",placeholder:"t\xe9l\xe9phone",onChange:function(e){return h(e.target.value)},value:d}),Object(l.jsx)("input",{className:"mon-email",type:"mail",onChange:function(e){return o(e.target.value)},placeholder:"email *",value:j}),Object(l.jsx)("div",{className:"email-content"})]}),Object(l.jsx)("button",{onClick:function(){k()},className:"button",type:"button",children:"Envoyer"}),Object(l.jsx)("div",{className:"form-message"}),N&&Object(l.jsx)(u,{PopupVisibleClick:k})]})};c(36);function m(e){var t=e.pictures,c=Object(r.g)(),n=t[parseInt(c.index)];return Object(l.jsxs)("div",{className:"info-planete",children:[Object(l.jsx)("img",{className:"info-img",src:n.image,alt:n.name}),Object(l.jsxs)("div",{className:"info-txt",children:[Object(l.jsx)("h2",{children:n.title}),Object(l.jsx)("h3",{children:n.description}),Object(l.jsx)("h4",{children:n.dateCreation})]})]})}c(37);function d(){var e=Object(r.g)(),t=Object(r.f)(),c=Object(n.useState)([]),s=Object(i.a)(c,2),a=s[0],j=s[1];Object(n.useEffect)((function(){fetch("https://images-api.nasa.gov/search?q=".concat(e.name)).then((function(e){return e.json()})).then((function(e){console.log(e.collection.items);var t=e.collection.items.slice(1,13).map((function(e){var t;return{image:null===(t=e.links[0])||void 0===t?void 0:t.href,dateCreation:e.data[0].date_created,description:e.data[0].description,title:e.data[0].title,media:e.data[0].media_type}}));console.log(t),j(t)}))}),[]);return Object(l.jsx)("div",{className:"container-planete",children:Object(l.jsx)("div",{className:"container-carte",children:Object(l.jsxs)(r.c,{children:[Object(l.jsx)(r.a,{exact:!0,path:"/cartes/".concat(e.name),children:a.map((function(c,n){return Object(l.jsxs)("div",{onClick:function(){return c="/cartes/".concat(e.name,"/").concat(n),t.push(c),void window.scroll(0,0);var c},className:"carte-planete",children:[Object(l.jsx)("img",{src:c.image,alt:c.name}),Object(l.jsxs)("div",{className:"txt-cartes",children:[Object(l.jsx)("h2",{children:c.title}),Object(l.jsx)("h3",{children:c.description}),Object(l.jsx)("h4",{children:c.dateCreation})]})]})}))}),Object(l.jsx)(r.a,{path:"/cartes/".concat(e.name,"/:index"),children:Object(l.jsx)(m,{pictures:a})})]})})})}c(38);var h=c(4);function O(){var e=function(){window.scroll(0,0)};return Object(l.jsxs)("div",{className:"container-nav",children:[Object(l.jsxs)("div",{className:"lignes",children:[Object(l.jsx)("div",{className:"l1"}),Object(l.jsx)("div",{className:"l2"})]}),Object(l.jsxs)("nav",{children:[Object(l.jsx)("img",{src:"img/StarHome.svg",alt:"logo"}),Object(l.jsxs)("ul",{children:[Object(l.jsxs)("li",{children:[" ",Object(l.jsx)(h.b,{onClick:e,className:"slide-line",to:"/",children:"Accueil"})]}),Object(l.jsxs)("li",{children:[" ",Object(l.jsx)(h.b,{onClick:e,className:"slide-line",to:"/cartes/jupiter",children:"Planetes"})]}),Object(l.jsxs)("li",{children:[" ",Object(l.jsx)(h.b,{onClick:e,className:"slide-line",to:"/contact",children:"Contact"})]})]})]}),Object(l.jsxs)("div",{className:"navbar-phone",children:[Object(l.jsx)(h.b,{onClick:e,to:"/",children:Object(l.jsx)("i",{className:"fas fa-home"})}),Object(l.jsx)(h.b,{onClick:e,to:"/cartes/jupiter",children:Object(l.jsx)("i",{class:"fas fa-globe-americas"})}),Object(l.jsx)(h.b,{onClick:e,to:"/contact",children:Object(l.jsx)("i",{className:"fas fa-phone"})})]})]})}c(39);function x(){return Object(l.jsxs)("footer",{children:[Object(l.jsxs)("div",{className:"mes-icons",children:[Object(l.jsx)("a",{href:"https://twitter.com/",children:Object(l.jsx)("i",{className:"fab fa-twitter"})}),Object(l.jsx)("a",{href:"https://www.instagram.com/",children:Object(l.jsx)("i",{className:"fab fa-instagram"})}),Object(l.jsx)("a",{href:"https://github.com/",children:Object(l.jsx)("i",{className:"fab fa-github"})}),Object(l.jsx)("a",{href:"https://www.linkedin.com/",children:Object(l.jsx)("i",{className:"fab fa-linkedin-in"})})]}),Object(l.jsx)("div",{className:"Developpeur",children:"Sylvain | Thomas | Alexander"}),Object(l.jsxs)("div",{className:"footer-bas",children:[Object(l.jsxs)("div",{className:"footer-nom",children:[Object(l.jsx)("h2",{children:"STA"}),Object(l.jsx)("i",{class:"far fa-registered"})]}),Object(l.jsx)("div",{className:"footer-droit-auteur",children:Object(l.jsx)("p",{children:"StarHome est une soci\xe9t\xe9 fran\xe7aise de tourisme spatial fond\xe9e en 2021 par les STA\xae."})})]})]})}var p=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2);return t[0],t[1],Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(O,{}),Object(l.jsxs)(r.c,{children:[Object(l.jsx)(r.a,{exact:!0,path:"/",children:Object(l.jsx)(o,{})}),Object(l.jsx)(r.a,{path:"/cartes/:name",children:Object(l.jsx)(d,{})}),Object(l.jsx)(r.a,{path:"/contact",children:Object(l.jsx)(b,{})})]}),Object(l.jsx)(x,{})]})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,41)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};a.a.render(Object(l.jsx)(h.a,{children:Object(l.jsx)(p,{})}),document.getElementById("root")),f()}},[[40,1,2]]]);
//# sourceMappingURL=main.18c4e50d.chunk.js.map