"use strict";(self.webpackChunkneo_computers=self.webpackChunkneo_computers||[]).push([[834],{2834:(q,h,r)=>{r.r(h),r.d(h,{ProdutosModule:()=>p});var _=r(6895),o=r(1571);const P=[{id:1,descricao:"Mouse gamer",preco:439,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/mouse-3.jpg",quantidadeEstoque:10},{id:2,descricao:"Monitor muito bom",preco:1200.5,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/monitor-1.jpg",quantidadeEstoque:11},{id:3,descricao:"Teclado excelente",preco:749.99,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/teclado-1.jpg",quantidadeEstoque:12},{id:4,descricao:"Fone para quem joga FPS",preco:599.99,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/fone-de-ouvido-2.jpg",quantidadeEstoque:13},{id:5,descricao:"Fone de ouvido",preco:299.99,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/fone-de-ouvido-1.jpg",quantidadeEstoque:10},{id:6,descricao:"Fone de ouvido bom",preco:399.99,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/fone-de-ouvido-3.jpg",quantidadeEstoque:10},{id:7,descricao:"HD 1TB",preco:499.99,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/hd.jpg",quantidadeEstoque:10},{id:8,descricao:"Combo de placa de v\xeddeos",preco:18449.99,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/placa-video.jpg",quantidadeEstoque:10},{id:9,descricao:"Processador Ryzen",preco:1e3,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/processador.jpg",quantidadeEstoque:10},{id:10,descricao:"Notebook bom",preco:2500,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/laptop-1.jpg",quantidadeEstoque:10},{id:11,descricao:"Notebook excelente",preco:4500,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/laptop-2.jpg",quantidadeEstoque:10},{id:12,descricao:"Mouse barato",preco:20,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/mouse-1.png",quantidadeEstoque:10},{id:13,descricao:"Mouse \xf3timo",preco:200,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/mouse-2.jpg",quantidadeEstoque:10},{id:14,descricao:"Mouse pequeno",preco:50,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/mouse-4.jpg",quantidadeEstoque:10},{id:15,descricao:"Teclado bom",preco:159.99,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/teclado-2.jpg",quantidadeEstoque:10}];class c{constructor(){this.produtos=P}getAll(){return this.produtos}getOne(t){return this.produtos.find(e=>e.id==t)}}c.\u0275fac=function(t){return new(t||c)},c.\u0275prov=o.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"});var f=r(8881);class a{constructor(t){this.snackBar=t}notificar(t){this.snackBar.open(t,"Ok",{duration:2e3,verticalPosition:"top",horizontalPosition:"center"})}}a.\u0275fac=function(t){return new(t||a)(o.LFG(f.ux))},a.\u0275prov=o.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"});var v=r(5087),s=r(9541),d=r(433);class l{constructor(t,e,i,m){this.produtoService=t,this.notificacao=e,this.carrinhoService=i,this.route=m,this.quantidade=1}ngOnInit(){const e=Number(this.route.snapshot.paramMap.get("id"));this.produto=this.produtoService.getOne(e)}adicionarAoCarrinho(){const t={...this.produto,quantidade:this.quantidade};this.carrinhoService.adicionarAoCarrinho(t),this.notificacao.notificar("Produto inserido no carrinho com sucesso!")}}function x(n,t){if(1&n&&(o.TgZ(0,"div",2)(1,"a",3),o._UZ(2,"img",4),o.TgZ(3,"h2",5),o._uU(4),o.qZA(),o.TgZ(5,"p",6),o._uU(6),o.ALo(7,"currency"),o.qZA(),o.TgZ(8,"p",7),o._uU(9),o.qZA(),o.TgZ(10,"button",8),o._uU(11,"Comprar"),o.qZA()()()),2&n){const e=t.$implicit;o.xp6(1),o.MGl("routerLink","/produtos/",e.id,""),o.xp6(1),o.Q6J("src",e.imagem,o.LSH),o.xp6(2),o.hij(" ",e.descricao," "),o.xp6(2),o.hij(" ",o.xi3(7,5,e.preco,"BRL")," "),o.xp6(3),o.hij(" ",e.descricaoPreco," ")}}l.\u0275fac=function(t){return new(t||l)(o.Y36(c),o.Y36(a),o.Y36(v.e),o.Y36(s.gz))},l.\u0275cmp=o.Xpm({type:l,selectors:[["app-detalhe-produto"]],decls:19,vars:8,consts:[[1,"product__container"],[1,"product-image__container"],[3,"src"],[1,"product-description__container"],[1,"product__name"],[1,"product__price"],["type","number","min","1",3,"ngModel","ngModelChange"],[1,"product__avaiability"],[3,"click"]],template:function(t,e){1&t&&(o.TgZ(0,"section",0)(1,"div",1),o._UZ(2,"img",2),o.qZA(),o.TgZ(3,"div",3)(4,"h2",4),o._uU(5),o.qZA(),o.TgZ(6,"h3",5),o._uU(7),o.ALo(8,"currency"),o.qZA(),o.TgZ(9,"p"),o._uU(10,"Estoque dispon\xedvel:"),o.qZA(),o.TgZ(11,"label"),o._uU(12," Quantidade: "),o.TgZ(13,"input",6),o.NdJ("ngModelChange",function(m){return e.quantidade=m}),o.qZA(),o._uU(14," unidade(s) "),o.qZA(),o.TgZ(15,"p",7),o._uU(16),o.qZA(),o.TgZ(17,"button",8),o.NdJ("click",function(){return e.adicionarAoCarrinho()}),o._uU(18,"Adicionar ao Carrinho"),o.qZA()()()),2&t&&(o.xp6(2),o.Q6J("src",null==e.produto?null:e.produto.imagem,o.LSH),o.xp6(3),o.Oqu(null==e.produto?null:e.produto.descricao),o.xp6(2),o.hij(" ",o.xi3(8,5,null==e.produto?null:e.produto.preco,"BRL")," "),o.xp6(6),o.Q6J("ngModel",e.quantidade),o.xp6(3),o.hij(" ",null==e.produto?null:e.produto.quantidadeEstoque," unidade(s) em estoque "))},dependencies:[d.Fj,d.wV,d.JJ,d.qQ,d.On,_.H9],styles:[".product__container[_ngcontent-%COMP%]{display:flex;column-gap:20px;margin:20px 0}.product-image__container[_ngcontent-%COMP%]{align-self:center}.product__container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:350px;height:350px}.product__name[_ngcontent-%COMP%]{font-size:36px}.product__price[_ngcontent-%COMP%]{font-size:28px;font-weight:400;margin:20px 0}.product-description__container[_ngcontent-%COMP%]{border:1px solid var(--light-gray);border-radius:8px;padding:15px;flex:1}.product__avaiability[_ngcontent-%COMP%]{font-size:12px}label[_ngcontent-%COMP%]{margin:20px 0;display:block}input[_ngcontent-%COMP%]{width:30px;padding:5px}input[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type=number][_ngcontent-%COMP%]{-moz-appearance:textfield}button[_ngcontent-%COMP%]{background-color:var(--blue);border:none;padding:10px;color:#fff;font-size:24px;transition:.3s all;margin:20px 0;cursor:pointer}button[_ngcontent-%COMP%]:hover{filter:brightness(1.3)}"]});class g{constructor(t,e,i){this.produtoService=t,this.router=e,this.route=i}ngOnInit(){const t=this.produtoService.getAll();this.route.queryParamMap.subscribe(e=>{const i=e.get("descricao")?.toLowerCase();this.produtos=i?t.filter(m=>m.descricao.toLowerCase().includes(i)):t})}mostrarDetalhes(t){this.router.navigate(["produtos/{produtoId}"])}}g.\u0275fac=function(t){return new(t||g)(o.Y36(c),o.Y36(s.F0),o.Y36(s.gz))},g.\u0275cmp=o.Xpm({type:g,selectors:[["app-produtos"]],decls:2,vars:1,consts:[[1,"product-list"],["class","product-list__card",4,"ngFor","ngForOf"],[1,"product-list__card"],[1,"product-list__link",3,"routerLink"],[3,"src"],[1,"product-item__name"],[1,"product-item__price"],[1,"product-item__price-description"],["type","button",1,"product-item__buy-button"]],template:function(t,e){1&t&&(o.TgZ(0,"section",0),o.YNc(1,x,12,8,"div",1),o.qZA()),2&t&&(o.xp6(1),o.Q6J("ngForOf",e.produtos))},dependencies:[_.sg,s.rH,_.H9],styles:[".product-list[_ngcontent-%COMP%]{padding:40px 0;width:-moz-fit-content;width:fit-content;display:flex;gap:20px;flex-flow:row wrap;justify-content:space-evenly;align-content:center}.product-list__card[_ngcontent-%COMP%]{box-sizing:border-box;padding:10px;border-radius:4px;flex:0 1 270px;height:450px;background-color:#fff;box-shadow:#63636333 0 2px 8px}.product-list__card[_ngcontent-%COMP%]:hover{outline:1px solid var(--blue);transform:scale(1.1);cursor:pointer}.product-list__link[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;row-gap:10px;text-decoration:none}.product-list__card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:250px;width:250px;display:block;border-radius:4px}.product-item__name[_ngcontent-%COMP%]{color:var(--blue);font-size:24px}.product-item__price[_ngcontent-%COMP%]{color:var(--orange);font-size:32px;font-weight:700}.product-item__price-deion[_ngcontent-%COMP%]{color:var(--gray);font-size:12px;font-weight:700}.product-item__buy-button[_ngcontent-%COMP%]{background-color:var(--blue);border:none;color:#fff;font-size:20px;padding:6px 12px}.product-item__buy-button[_ngcontent-%COMP%]:hover{filter:brightness(1.1);cursor:pointer}"]});const b=[{path:"",component:g},{path:":id",component:l}];class u{}u.\u0275fac=function(t){return new(t||u)},u.\u0275mod=o.oAB({type:u}),u.\u0275inj=o.cJS({imports:[s.Bz.forChild(b),s.Bz]});class p{}p.\u0275fac=function(t){return new(t||p)},p.\u0275mod=o.oAB({type:p}),p.\u0275inj=o.cJS({imports:[_.ez,u,d.u5]})}}]);