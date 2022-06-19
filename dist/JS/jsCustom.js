// menu-bar
const menu_btn=document.querySelector('#menu-btn');
const navbar =document.querySelector('.navbar');
const cart_icon =document.querySelector('#cart-btn');
const cart_item =document.querySelector('.cart-items-container');
const search_form =document.querySelector('.search-form');
const search_btn=document.querySelector('#search-btn');
const close_btn=document.querySelector('#search_close'); 








// 
let test=false;

function removeActive(...element){
    let node=[...element];
    node.forEach(item=>{
        item.classList.remove('active');
    })
}

// menu-btn
menu_btn.addEventListener('click',()=>{
    test=!test;
        navbar.classList.toggle('active');
        removeActive(cart_item,search_form);
        close_btn.classList.add('search_icon')
        search_btn.classList.remove('search_icon')
})

// cart-item
cart_icon.addEventListener('click',()=>{
        test=!test;
        cart_item.classList.toggle('active');
        removeActive(navbar,search_form)
        close_btn.classList.add('search_icon')
        search_btn.classList.remove('search_icon')
})

// search_form
search_btn.addEventListener('click',()=>{
    test=!test;
    removeActive(navbar,cart_item)
})

close_btn.addEventListener('click',()=>{
    test=!test;
    removeActive(navbar,cart_item)
})
// menu_slider

$('.box-container').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
})

$('.slide_top').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    cssEase: 'linear',
})

$('.about_slide').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: 'linear',

})


// The code is a test and does not have the correct structure

class ElementNode{
    constructor(){
        this.nodeGotop=document.querySelector('.gotop');
        this.search_btn=document.querySelector('#search-btn');
        this.search_box=document.querySelector('#search-box');
        this.search_lable=document.querySelector('.search-lable');
        this.search_close=document.querySelector('#search_close');
        this.toggle_theme=document.querySelector('.toggle_theme');
        this.search_form=document.querySelector('.search-form');
        this.show_more_btn=document.querySelector('.show_more');
        this.text_about=document.querySelector('.text-about');
       this.body=document.body

    }
}

// gotop_btn

class Scrollbtn extends ElementNode{
    constructor(){
        super();
        this.clineheight=0;
        this.scrollheight=0;
        this.height=0;
        this.scroll=0;
        this.heightddocument=0;

    }

   scrollbtn=function(element,number){
        this.clineheight=document.documentElement.scrollHeight;
        this.scrollheight=document.documentElement.clientHeight;
        this.height= this.clineheight-this.scrollheight;
        this.scroll=document.documentElement.scrollTop;
        this.heightddocument=(this.scroll*100)/this.height;
        this.nodeGotop.style.background=` conic-gradient( rgb(71, 48, 48) ${this.heightddocument}%, rgb(255, 255, 255) ${this.heightddocument}%)`;
            if (Math.round(this.heightddocument)>=number) {
                element.classList.remove('hide')
                element.classList.add('show')

            }if (Math.round(this.heightddocument)<=number) {
                element.classList.remove('show')
                element.classList.add('hide')
            } 
        }
}


class GotopBtn extends Scrollbtn{
    constructor(){
        super()
        this.nodeGotop.addEventListener('click',this.gotop.bind(this));
    }
   
        gotop(){
            document.documentElement.scrollTop=0;
            };

        scrollshmoth(){
                this.scrollbtn(this.nodeGotop,50)
            }
  };


// seachInput_box

class Reguire {
   
    constructor(){
        this.regurie =false;
    }
    invalid(value){
        
        if (value.trim() != '') {
            return this.regurie=true;
        }else{
            return this.regurie=false;
        }
    }

}


class InputValueSearch extends ElementNode{
    constructor(){
        super()
    }
    inputValue(){
       let nodvalue=this.search_box.value;
       let reg=new Reguire();
       reg.invalid(nodvalue);
       if (reg.regurie === true) {
           this.search_box.style.border=`none`
           return nodvalue;
       }
    }
}


class ToggleIconsSearch{
    constructor(){
        this.changeicon=true;
    }

    toggleiconesearch(showIcon,hideIcon){
        hideIcon.classList.remove('search_icon')
        showIcon.classList.add('search_icon');
        search_form.classList.toggle('active');
    }
}



class SeachBox extends InputValueSearch{
    constructor(){
      super();
      this.keydown= document.addEventListener('keydown',this.searchenter.bind(this))
      this.search_lable.addEventListener('click',this.searchbtn.bind(this));
      this.search_btn.addEventListener('click',this.toggleicon.bind(this));
      this.search_close.addEventListener('click',this.toggleiconclose.bind(this));

     
    }
    searchbtn(){
       let value=this.inputValue();
       let url=open(`https://www.google.com/search?q=${value}`);
       
    }

    toggleiconclose(){
      const toggle=new ToggleIconsSearch()
      toggle.toggleiconesearch(this.search_close,this.search_btn)
    }

    toggleicon(){
        const toggle=new ToggleIconsSearch()
        toggle.toggleiconesearch(this.search_btn,this.search_close)
    }

    searchenter(e){
          if (e.keyCode === 13) {
              this.searchbtn()
          }
    }

}


// toggle_theme

class ToggleTheme extends ElementNode{
    constructor(){
        super()
      this.toggle_theme.addEventListener('click',this.toggletheme.bind(this))
    }

    toggletheme(){
        this.body.classList.toggle('light');
        this.search_form.classList.toggle('search-box-light')

        let Branch_1=[...this.body.firstElementChild.children];
        Branch_1.map(section=>{
           section.classList.toggle('light')
        })

     
    }

}


// show_More_Btn
class ShowMoreBtn extends ElementNode{
    constructor(){
        super()
        this.togglebtn=false;
        this.text_about.addEventListener('transitionend',this.toggleicon.bind(this))
        this.show_more_btn.addEventListener('click',this.showmore.bind(this))
    }

    showmore(e){
        e.preventDefault()
        this.text_about.classList.toggle('collaps');
        this.togglebtn=!this.togglebtn;
    }

    toggleicon(){
        console.log(this.togglebtn)
        if (this.togglebtn) {
            this.show_more_btn.innerHTML=`<i class="fal fa-angle-double-up"></i> show less`;
        }else{
            this.show_more_btn.innerHTML=`<i class="fal fa-angle-double-down"></i> show more`;
        }
    }
}


const Btnscroll=new GotopBtn()
window.addEventListener('scroll',()=>{Btnscroll.scrollshmoth();removeActive(navbar,cart_item)})

document.addEventListener("DOMContentLoaded", function(event) {
    new ShowMoreBtn();
    new ToggleTheme();
    new SeachBox();
    Btnscroll.gotop();
});