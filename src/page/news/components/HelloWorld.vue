<script setup>
</script>

<template>
  <h2 class="page-title">
				<p>资讯中心</p>
				<p>News-Center</p>
			</h2>
			<div class="topics-Container">
			    <ul class="topics-Article_List">
			        <li class="topics_item">
			            <a class="st-Topics_Link" href="#">
			                <article class="st-Topics_Article">
			                    <figure class="st-Topics_Figure">
			                        <div class="st-Topics_Image"><img src="/img/1000x500.png"></div>
			                    </figure>
			                    <div class="st-Topics_Contents">
			                        <h2 class="st-Topics_Title">这是第一条消息</h2>
			                        <p class="st-Topics_Date">2023.12.27</p>
			                    </div>
			                </article>
			            </a>
			        </li>
			        
					<li class="topics_item">
					    <a class="st-Topics_Link" href="#">
					        <article class="st-Topics_Article">
					            <figure class="st-Topics_Figure">
					                <div class="st-Topics_Image"><img src="/img/1000x500.png"></div>
					            </figure>
					            <div class="st-Topics_Contents">
					                <h2 class="st-Topics_Title">这是第二条消息</h2>
					                <p class="st-Topics_Date">2023.12.27</p>
					            </div>
					        </article>
					    </a>
					</li>
					
					<li class="topics_item">
					    <a class="st-Topics_Link" href="#">
					        <article class="st-Topics_Article">
					            <figure class="st-Topics_Figure">
					                <div class="st-Topics_Image"><img src="/img/1000x500.png"></div>
					            </figure>
					            <div class="st-Topics_Contents">
					                <h2 class="st-Topics_Title">这是第三条消息</h2>
					                <p class="st-Topics_Date">2023.12.27</p>
					            </div>
					        </article>
					    </a>
					</li>
					
					<li class="topics_item">
					    <a class="st-Topics_Link" href="#">
					        <article class="st-Topics_Article">
					            <figure class="st-Topics_Figure">
					                <div class="st-Topics_Image"><img src="/img/1000x500.png"></div>
					            </figure>
					            <div class="st-Topics_Contents">
					                <h2 class="st-Topics_Title">这是第四条消息</h2>
					                <p class="st-Topics_Date">2023.12.27</p>
					            </div>
					        </article>
					    </a>
					</li>
					
					<li class="topics_item">
					    <a class="st-Topics_Link" href="#">
					        <article class="st-Topics_Article">
					            <figure class="st-Topics_Figure">
					                <div class="st-Topics_Image"><img src="/img/1000x500.png"></div>
					            </figure>
					            <div class="st-Topics_Contents">
					                <h2 class="st-Topics_Title">这是第五条消息</h2>
					                <p class="st-Topics_Date">2023.12.27</p>
					            </div>
					        </article>
					    </a>
					</li>
					
					<li class="topics_item">
					    <a class="st-Topics_Link" href="#">
					        <article class="st-Topics_Article">
					            <figure class="st-Topics_Figure">
					                <div class="st-Topics_Image"><img src="/img/1000x500.png"></div>
					            </figure>
					            <div class="st-Topics_Contents">
					                <h2 class="st-Topics_Title">这是第六条消息</h2>
					                <p class="st-Topics_Date">2023.12.27</p>
					            </div>
					        </article>
					    </a>
					</li>
					
					<li class="topics_item">
					    <a class="st-Topics_Link" href="#">
					        <article class="st-Topics_Article">
					            <figure class="st-Topics_Figure">
					                <div class="st-Topics_Image"><img src="/img/1000x500.png"></div>
					            </figure>
					            <div class="st-Topics_Contents">
					                <h2 class="st-Topics_Title">这是第七条消息</h2>
					                <p class="st-Topics_Date">2023.12.27</p>
					            </div>
					        </article>
					    </a>
					</li>
			    </ul>
			    <div class="st-Pagination"></div>
			</div>
</template>

<style scoped>
ul, ol {
    margin: 0;
    padding: 0;
    list-style: none
}

.topics-Container {
    width: 79.16667vw;
    margin: 0 auto
}

@media screen and (min-width:768px) {
    .topics-Container {
        max-width: 1200px;
        width: calc(100% - 100px)
    }
}

@media screen and (min-width:1921px) {
    .topics-Container {
        max-width: none;
        width: 62.5vw
    }
}

.topics-Article_List {
    margin-bottom: 10.41667vw
}

@media screen and (min-width:768px) {
    .topics-Article_List {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        margin: 0 -12px 20px
    }
}

@media screen and (min-width:1921px) {
    .topics-Article_List {
        margin: 0 -.625vw 1.04167vw
    }
}

.topics-Article_List .topics_item {
    margin-bottom: 6.51042vw
}

@media screen and (min-width:768px) {
    .topics-Article_List .topics_item {
        width: calc(50% - 24px);
        margin: 0 12px 60px
    }
}

@media screen and (min-width:960px) {
    .topics-Article_List .topics_item {
        width: calc(33.33% - 24px)
    }
}

@media screen and (min-width:1921px) {
    .topics-Article_List .topics_item {
        width: calc(33.33% - 1.25vw);
        margin: 0 .625vw 3.125vw
    }
}

.topics-Article {
    margin: 0 2.60417vw;
    padding: 6.51042vw 3.90625vw 10.41667vw;
    border-radius: 1.5625vw;
    background-color: #fff;
    box-shadow: 0 1.30208vw 2.60417vw rgba(67, 160, 160, .2)
}

@media screen and (min-width:768px) {
    .topics-Article {
        box-shadow: 0 10px 20px rgba(67, 160, 160, .2)
    }
}

@media screen and (min-width:1921px) {
    .topics-Article {
        box-shadow: _vwPC(0) _vwPC(10) _vwPC(20) rgba(67, 160, 160, .2)
    }
}

@media screen and (min-width:768px) {
    .topics-Article {
        max-width: 960px;
        width: calc(100% - 100px);
        margin: 0 auto;
        padding: 60px 40px;
        border-radius: 6px
    }
}

@media screen and (min-width:960px) {
    .topics-Article {
        padding: 60px 80px
    }
}

@media screen and (min-width:1921px) {
    .topics-Article {
        max-width: none;
        width: 50vw;
        padding: 3.125vw 4.16667vw;
        border-radius: .3125vw
    }
}

.topics-Article_Header {
    margin-bottom: 6.11979vw
}

@media screen and (min-width:768px) {
    .topics-Article_Header {
        margin-bottom: 42px
    }
}

@media screen and (min-width:1921px) {
    .topics-Article_Header {
        margin-bottom: 2.1875vw
    }
}

.topics-Article_Date {
    margin-bottom: 3.38542vw;
    color: #5dd;
    font-family: Spartan, sans-serif;
    font-variant-ligatures: none;
    font-size: 2.86458vw;
    font-weight: 500;
    letter-spacing: .08em
}

@media screen and (min-width:768px) {
    .topics-Article_Date {
        margin-bottom: 14px;
        font-size: 23px
    }
}

@media screen and (min-width:1921px) {
    .topics-Article_Date {
        margin-bottom: .72917vw;
        font-size: 1.19792vw
    }
}

.topics-Article_Title {
    font-size: 4.6875vw;
    font-weight: 500;
    line-height: 1.44444;
    letter-spacing: .08em
}

@media screen and (min-width:768px) {
    .topics-Article_Title {
        font-size: 24px;
        line-height: 1.75
    }
}

@media screen and (min-width:1921px) {
    .topics-Article_Title {
        font-size: 1.25vw
    }
}

.topics-Article_Visual {
    margin-top: 7.42188vw
}

@media screen and (min-width:768px) {
    .topics-Article_Visual {
        margin-top: 41px
    }
}

@media screen and (min-width:1921px) {
    .topics-Article_Visual {
        margin-top: 2.13542vw
    }
}

.topics-Article_Footer {
    margin-top: 7.8125vw
}

@media screen and (min-width:768px) {
    .topics-Article_Footer {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
        margin-top: 74px
    }
}

@media screen and (min-width:1921px) {
    .topics-Article_Footer {
        margin-top: 3.85417vw
    }
}

.topics-Article_Share {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: end;
    justify-content: flex-end;
    margin-top: 8.07292vw;
    margin-right: 3.90625vw
}

@media screen and (min-width:768px) {
    .topics-Article_Share {
        margin-top: 0;
        margin-right: 0;
        margin-left: auto
    }
}

.topics-Article_Share_Title {
    margin-right: .13021vw;
    color: #51627a;
    font-size: 3.125vw;
    letter-spacing: .08em
}

@media screen and (min-width:768px) {
    .topics-Article_Share_Title {
        margin-right: 12px;
        font-size: 16px
    }
}

@media screen and (min-width:1921px) {
    .topics-Article_Share_Title {
        margin-right: .625vw;
        font-size: .83333vw
    }
}

.topics-Article_Share_List {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center
}

.topics-Article_Share_List .share_item {
    margin-left: 3.90625vw
}

@media screen and (min-width:768px) {
    .topics-Article_Share_List .share_item {
        margin-left: 14px
    }
}

@media screen and (min-width:1921px) {
    .topics-Article_Share_List .share_item {
        margin-left: .72917vw
    }
}

.topics-Article_Share_List .share_link {
    display: block;
    width: 7.8125vw;
    height: 7.8125vw;
    opacity: 1;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
    transition: opacity .2s;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden
}

.topics-Article_Share_List .share_link:hover {
    opacity: .8;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=80)"
}

@media screen and (min-width:768px) {
    .topics-Article_Share_List .share_link {
        width: 34px;
        height: 34px
    }
}

@media screen and (min-width:1921px) {
    .topics-Article_Share_List .share_link {
        width: 1.77083vw;
        height: 1.77083vw
    }
}

.st-Topics_Link {
    display: block;
    overflow: hidden;
    height: 100%;
    border-radius: 1.5625vw;
    background-color: #fff;
    box-shadow: 0 1.30208vw 2.60417vw rgba(10, 10, 10, 0.2);
    transition: box-shadow .2s
}

@media screen and (min-width:768px) {
    .st-Topics_Link {
        box-shadow: 0 10px 20px rgba(10, 10, 10, 0.2)
    }
}

@media screen and (min-width:1921px) {
    .st-Topics_Link {
        box-shadow: _vwPC(0) _vwPC(10) _vwPC(20) rgba(10, 10, 10, 0.2)
    }
}

@media screen and (min-width:768px) {
    .st-Topics_Link {
        border-radius: 6px
    }
}

@media screen and (min-width:1921px) {
    .st-Topics_Link {
        border-radius: .3125vw
    }
}

.st-Topics_Link[target=_blank] .st-Topics_Title:after {
    display: inline-block;
    position: relative;
    width: 2.34375vw;
    height: 2.34375vw;
    margin-left: 2.08333vw;
    background-image: url(data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%3E%3Cpath%20d%3D%22M95.453%2045.453a4.545%204.545%200%2001-4.547-4.547V15.525L44.12%2062.297a4.501%204.501%200%2001-3.217%201.337%204.507%204.507%200%2001-3.21-1.337c-1.773-1.766-1.773-4.654%200-6.427L84.471%209.091h-25.38a4.545%204.545%200%2001-4.547-4.547%204.548%204.548%200%20014.547-4.54h36.362A4.548%204.548%200%2001100%204.544v36.362a4.55%204.55%200%2001-4.547%204.547zM50.004%2027.272H9.094V90.91h63.623V50a4.55%204.55%200%20014.547-4.547A4.55%204.55%200%200181.811%2050v45.456a4.548%204.548%200%2001-4.547%204.54H4.554A4.544%204.544%200%20010%2095.456V22.732a4.546%204.546%200%20014.554-4.547h45.449a4.544%204.544%200%20014.54%204.547%204.536%204.536%200%2001-4.539%204.54z%22%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20fill%3D%22%231d2d44%22%2F%3E%3C%2Fsvg%3E);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    content: "";
    transition: background-image .2s
}

@media screen and (min-width:768px) {
    .st-Topics_Link[target=_blank] .st-Topics_Title:after {
        top: 1px;
        width: 15px;
        height: 15px;
        margin-left: 12px
    }
}

@media screen and (min-width:1921px) {
    .st-Topics_Link[target=_blank] .st-Topics_Title:after {
        top: .05208vw;
        width: .78125vw;
        height: .78125vw;
        margin-left: .625vw
    }
}

.st-Topics_Link:hover {
    box-shadow: 0 0 0 rgba(10, 10, 10, 0.2)
}

.st-Topics_Link:hover .st-Topics_Figure {
    background-color: #818181
}

.st-Topics_Link:hover .st-Topics_Image {
    opacity: .2;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=20)"
}

.st-Topics_Link:hover .st-Topics_Title {
    color: #818181
}

.st-Topics_Link:hover .st-Topics_Title:after {
    background-image: url(data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%3E%3Cpath%20d%3D%22M95.453%2045.453a4.545%204.545%200%2001-4.547-4.547V15.525L44.12%2062.297a4.501%204.501%200%2001-3.217%201.337%204.507%204.507%200%2001-3.21-1.337c-1.773-1.766-1.773-4.654%200-6.427L84.471%209.091h-25.38a4.545%204.545%200%2001-4.547-4.547%204.548%204.548%200%20014.547-4.54h36.362A4.548%204.548%200%2001100%204.544v36.362a4.55%204.55%200%2001-4.547%204.547zM50.004%2027.272H9.094V90.91h63.623V50a4.55%204.55%200%20014.547-4.547A4.55%204.55%200%200181.811%2050v45.456a4.548%204.548%200%2001-4.547%204.54H4.554A4.544%204.544%200%20010%2095.456V22.732a4.546%204.546%200%20014.554-4.547h45.449a4.544%204.544%200%20014.54%204.547%204.536%204.536%200%2001-4.539%204.54z%22%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20fill%3D%22%235bdcdc%22%2F%3E%3C%2Fsvg%3E);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain
}

.st-Topics_Article {
    height: 100%
}

.st-Topics_Figure {
    position: relative;
    background-color: rgba(10, 10, 10, 0.2);
    transition: background-color .2s
}

.st-Topics_Figure:before {
    display: block;
    padding-top: 56.25%;
    content: ""
}

.st-Topics_Image {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    opacity: 1;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
    transition: opacity .2s
}

.st-Topics_Image img {
    width: 100%;
    height: 100%;
    object-fit: contain
}

.st-Topics_Contents {
    padding: 5.85938vw 3.90625vw 7.29167vw
}

@media screen and (min-width:768px) {
    .st-Topics_Contents {
        padding: 28px 20px 37px
    }
}

@media screen and (min-width:1921px) {
    .st-Topics_Contents {
        padding: 1.45833vw 1.04167vw 1.92708vw
    }
}

.st-Topics_Title {
    margin-bottom: 4.16667vw;
    font-size: 3.125vw;
    line-height: 1.91667;
    letter-spacing: .05em;
    transition: color .2s
}

@media screen and (min-width:768px) {
    .st-Topics_Title {
        margin-bottom: 24px;
        font-size: 16px;
        line-height: 1.875
    }
}

@media screen and (min-width:1921px) {
    .st-Topics_Title {
        margin-bottom: 1.25vw;
        font-size: .83333vw
    }
}

.st-Topics_Date {
    margin-top: auto;
    color: #818181;
    font-family: Spartan, sans-serif;
    font-variant-ligatures: none;
    font-size: 2.86458vw;
    font-weight: 500;
    letter-spacing: .1em
}

@media screen and (min-width:768px) {
    .st-Topics_Date {
        font-size: 14px
    }
}

@media screen and (min-width:1921px) {
    .st-Topics_Date {
        font-size: .72917vw
    }
}

</style>
