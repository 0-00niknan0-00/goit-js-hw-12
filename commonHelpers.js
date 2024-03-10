import{i as u,a as y,S as h}from"./assets/vendor-b42c18af.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))p(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&p(a)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function p(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();function m(r){return r.hits.map(e=>`<div class="gallery-item">
            <a class="gallery-link" href="${e.largeImageURL}">
                <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" />
            </a>
            <div class="gallery-item-info">
                <p class="gallery-item-info-par">
                    <span class="gallery-item-info-span">Likes: <span>${e.likes}</span>
                    </span>    
                </p>
                <p class="gallery-item-info-par">
                    <span class="gallery-item-info-span">Views: <span>${e.views}</span>
                    </span>    
                </p>
                <p class="gallery-item-info-par">
                    <span class="gallery-item-info-span">Comments: <span>${e.comments}</span>
                    </span>    
                </p>
                <p class="gallery-item-info-par">
                    <span class="gallery-item-info-span">Downloads: <span>${e.downloads}</span>
                    </span>    
                </p>
            </div>
        </div>`).join("")}function L(){u.info({timeout:3e3,position:"topRight",message:"We're sorry, but you've reached the end of search results."})}const b="41952140-5e618661129c37e138516e154",v="https://pixabay.com/api/",d=document.querySelector(".loader");async function f(r,e=1){d.style.display="block";try{const o=await y.get(v,{params:{key:b,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15}});return d.style.display="none",o.data.hits.length===0&&u.error({timeout:3e3,position:"topRight",message:"There are no images matching your search query. Please, enter something else!"}),o.data}catch(o){console.error("Error fetching data!",o)}}const g=new h(".gallery a",{nav:!0,captions:!0,captionsData:"alt",captionDelay:150}),n=document.querySelector(".search-form"),i=document.querySelector(".gallery"),l=document.querySelector(".load-btn");let c="";n.addEventListener("submit",w);l.addEventListener("click",E);function w(r){r.preventDefault(),i.innerHTML="",c=n.elements.searchWord.value.trim(),f(c).then(e=>{const o=m(e);i.insertAdjacentHTML("beforeend",o),g.refresh()}).catch(e=>{console.error("Error:",e)}),n.reset(),l.style.display="block"}async function E(){currPage+=1;try{const r=await f(c,currPage);m(r),g.refresh();const e=i.getBoundingClientRect().height;window.scrollBy({top:4*e,behavior:"smooth"}),(!r.hits||r.hits.length===0)&&(l.style.display="none",L())}catch(r){console.error("Error:",r)}}
//# sourceMappingURL=commonHelpers.js.map
