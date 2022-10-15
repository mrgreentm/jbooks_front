"use strict";(self.webpackChunkjbooks_front=self.webpackChunkjbooks_front||[]).push([[425],{425:(P,s,o)=>{o.r(s),o.d(s,{AuthModule:()=>O});var f=o(9224),h=o(9808),r=o(3075),c=o(7322),g=o(4107),m=o(7531),l=o(1083),t=o(5e3),p=o(877),C=o(4428),d=o(5245);const v=[{path:"",component:(()=>{class e{constructor(n,a,u){this.authService=n,this.router=a,this.feedBackService=u,this.form=new r.cw({email:new r.NI(null,[r.kI.required]),password:new r.NI(null,[r.kI.required])})}ngOnInit(){this.form.markAllAsTouched()}login(){this.authService.authentication(this.form.value).subscribe(n=>{this.authService.setUser(n.user),n.token&&(this.authService.setUser(n.user),this.authService.setUserOnStorage(n),this.router.navigateByUrl("/home"),this.feedBackService.openSnackBar(`Seja Bem-vindo, ${n.user.name}`))})}redirect(){this.router.navigateByUrl("/register")}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(p.e),t.Y36(l.F0),t.Y36(C.R))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-auth"]],decls:29,vars:1,consts:[[1,"container"],[1,"show-product"],[1,"product-title"],[1,"subtitle"],[1,"saller-container"],[1,"icon"],[1,"saller-title"],[1,"auth-container"],[1,"title-container"],[1,"title"],[3,"formGroup"],["appearance","fill"],["matInput","","placeholder","pat@example.com","formControlName","email","required",""],["matInput","","placeholder","senha","type","password","formControlName","password","required",""],[1,"login",3,"click"],[1,"button-container"],[1,"register",3,"click"]],template:function(n,a){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h1",2),t._uU(3," A JBooks \xe9 um f\xf3rum para os Amantes dos Livros. "),t.qZA(),t.TgZ(4,"p",3),t._uU(5," Com a JBooks, nunca foi t\xe3o f\xe1cil compartilhar conhecimento. Junte-se a n\xf3s e fa\xe7a parte desta fam\xedlia. "),t.qZA(),t.TgZ(6,"div",4)(7,"mat-icon",5),t._uU(8,"attach_money"),t.qZA(),t.TgZ(9,"p",6),t._uU(10,"Compre conosco pela Shopee!"),t.qZA()()(),t.TgZ(11,"div",7)(12,"div",8)(13,"h1",9),t._uU(14,"JBooks"),t.qZA()(),t.TgZ(15,"form",10)(16,"mat-form-field",11)(17,"mat-label"),t._uU(18,"Insira seu e-mail"),t.qZA(),t._UZ(19,"input",12),t.qZA(),t.TgZ(20,"mat-form-field",11)(21,"mat-label"),t._uU(22,"Insira sua senha"),t.qZA(),t._UZ(23,"input",13),t.qZA(),t.TgZ(24,"button",14),t.NdJ("click",function(){return a.login()}),t._uU(25,"Logar"),t.qZA(),t.TgZ(26,"div",15)(27,"button",16),t.NdJ("click",function(){return a.redirect()}),t._uU(28,"Cadastre-se"),t.qZA()()()()()),2&n&&(t.xp6(15),t.Q6J("formGroup",a.form))},directives:[d.Hw,r._Y,r.JL,r.sg,c.KE,c.hX,m.Nt,r.Fj,r.JJ,r.u,r.Q7],styles:[".auth-container[_ngcontent-%COMP%]{background-color:#fff;width:30%;margin:0 3rem;padding-top:1rem}.product-title[_ngcontent-%COMP%]{color:#000;font-size:3.125rem;font-weight:800;margin:3rem 0 0;line-height:3.5rem}form[_ngcontent-%COMP%]{display:flex;align-content:center;justify-content:center;flex-direction:column}.mat-form-field[_ngcontent-%COMP%]{width:90%;margin:0 auto}button[_ngcontent-%COMP%]{background-color:#ff7f5c;border-radius:5px;border:none;color:#fff;height:3rem;cursor:pointer;transition:all .5s}button[_ngcontent-%COMP%]:hover{background-color:#f8734e;transition:all .5s}.title-container[_ngcontent-%COMP%]{text-align:center}.title-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:3rem}.container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin:2rem}.show-product[_ngcontent-%COMP%]{width:40%;display:flex;flex-direction:column;gap:2rem}.subtitle[_ngcontent-%COMP%]{color:#64607d;font-weight:500;font-size:1.25rem}.mat-form-field[_ngcontent-%COMP%]{background:#ffffff;border:1px solid #dfe4f1;border-radius:5px}.title[_ngcontent-%COMP%]{color:#3734a9;font-size:1.5rem;font-weight:700}.saller-container[_ngcontent-%COMP%]{display:flex;align-items:center;gap:2rem}.saller-title[_ngcontent-%COMP%]{font-weight:600;font-size:1.1rem;line-height:1.9rem;letter-spacing:-.02em;color:#3734a9}.icon[_ngcontent-%COMP%]{font-size:3rem;width:45px;height:50px;background:#22d497;border-radius:47px}@media (max-width: 768px){.container[_ngcontent-%COMP%]{flex-direction:column-reverse}.show-product[_ngcontent-%COMP%], .auth-container[_ngcontent-%COMP%]{width:100%}.auth-container[_ngcontent-%COMP%]{margin:0 0 3rem}}.register[_ngcontent-%COMP%]{border:none;color:#fff;height:3rem;transition:all .5s;background-color:#4f46ba;border-radius:10px;width:100%;cursor:pointer}.login[_ngcontent-%COMP%]:hover{background-color:#4f46ba}"]}),e})()}];let A=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[l.Bz.forChild(v)],l.Bz]}),e})();var M=o(5229);let O=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[h.ez,r.UX,r.u5,c.lN,g.LD,c.lN,m.c,f.QW,A,d.Ps,M.m]]}),e})()}}]);