(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(7),l=a.n(i),o=a(8),s=a(1),r=a(2),m=a(5),u=a(4),v=a(3),d=(a(14),function(e){Object(u.a)(a,e);var t=Object(v.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={moviesWillWatch:!1},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.movie,n=t.removeMovie,i=t.addMovieToWillWatch,l=t.removeMovieFromWillWatch;return c.a.createElement("div",{className:"col-lg-3 col-md-4 col-sm-6 col-12 mb-3"},c.a.createElement("div",{className:"card"},c.a.createElement("p",{className:"card__title mb-0"},a.title),c.a.createElement("img",{src:a.poster_path||a.backdrop_path?"https://image.tmdb.org/t/p/w500/".concat(a.poster_path||a.backdrop_path):"https://via.placeholder.com/315x315.png",alt:a.title}),c.a.createElement("p",{className:"d-flex align-items-center justify-content-center rate p-2 m-0"},"Rating: ",a.vote_average),c.a.createElement("div",{style:{width:"100%"},className:"p-1 d-flex justify-content-between align-items-center"},c.a.createElement("button",{type:"button",className:"btn p-1 ".concat(e.state.moviesWillWatch?"btn-secondary":"btn-primary"),onClick:function(){e.state.moviesWillWatch?(e.setState({moviesWillWatch:!1}),l(a)):(e.setState({moviesWillWatch:!0}),i(a))}},this.state.moviesWillWatch?"will watch remove":"will watch add"),c.a.createElement("button",{type:"button",className:"btn btn-warning p-1",onClick:n.bind(null,a)},"delete"))))}}]),a}(c.a.Component)),p=function(e){Object(u.a)(a,e);var t=Object(v.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"shouldComponentUpdate",value:function(e,t){return e.sort_by!==this.props.sort_by}},{key:"render",value:function(){var e=this.props,t=e.sort_by,a=e.updateSortBy,n=function(e){return function(){a(e)}},i=function(e){return"nav-link ".concat(t===e?"active":"")};return c.a.createElement("ul",{className:"tabs nav nav-pills d-flex justify-content-start align-items-center"},c.a.createElement("li",{className:"nav-item"},c.a.createElement("div",{className:i("popularity.desc"),onClick:n("popularity.desc")},"Popularity")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("div",{className:i("revenue.desc"),onClick:n("revenue.desc")},"Revenue")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("div",{className:i("vote_average.desc"),onClick:n("vote_average.desc")},"Vote average")))}}]),a}(c.a.Component),h=function(e){Object(u.a)(a,e);var t=Object(v.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props,t=e.page,a=e.updatePage,n=e.totalPages,i=function(e){return function(){return e>=1&&a(e)}};return c.a.createElement("div",{className:"navigation mt-4 mb-4"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("div",{className:"col-6 d-flex justify-content-between align-items-center"},c.a.createElement("button",{type:"button",className:"btn btn-dark",onClick:i(t-1)},"Prev Page"),c.a.createElement("div",{className:"d-flex flex-column align-items-center justify-content-center m-0"},c.a.createElement("p",{className:"total-pages m-0"},"Total Pages: ",n),c.a.createElement("p",{className:"current-page m-0"},"Page number: ",t)),c.a.createElement("button",{type:"button",className:"btn btn-dark",onClick:i(t+1)},"Next Page")))))}}]),a}(c.a.Component),f="https://api.themoviedb.org/3",g="3f4ca4f3a9750da53450646ced312397",b=function(e){Object(u.a)(a,e);var t=Object(v.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).getMovies=function(){fetch("".concat(f,"/discover/movie?api_key=").concat(g,"&sort_by=").concat(e.state.sort_by,"&page=").concat(e.state.page)).then(function(e){return e.json()}).then(function(t){e.setState({movies:t.results,total_pages:t.total_pages})})},e.addMovieToWillWatch=function(t){var a=[].concat(Object(o.a)(e.state.moviesWillWatch),[t]);e.setState({moviesWillWatch:a})},e.removeMovieFromWillWatch=function(t){var a=e.state.moviesWillWatch.filter(function(e){return e.id!==t.id});e.setState({moviesWillWatch:a})},e.updateSortBy=function(t){e.setState({sort_by:t})},e.updatePage=function(t){e.setState({page:t})},e.state={movies:[],total_pages:0,moviesWillWatch:[],sort_by:"revenue.desc",page:1},e.removeMovie=e.removeMovie.bind(Object(m.a)(e)),e.addMovieToWillWatch=e.addMovieToWillWatch.bind(Object(m.a)(e)),e}return Object(r.a)(a,[{key:"removeMovie",value:function(e){var t=this.state.movies.filter(function(t){return t.id!==e.id}),a=this.state.moviesWillWatch.filter(function(t){return t.id!==e.id});this.setState({movies:t,moviesWillWatch:a})}},{key:"componentDidMount",value:function(){this.getMovies()}},{key:"componentDidUpdate",value:function(e,t){t.sort_by!==this.state.sort_by&&this.getMovies(),t.page!==this.state.page&&this.getMovies()}},{key:"render",value:function(){var e=this;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"container-fluid",style:{background:"#ccc"}},c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("div",{className:"col-lg-9 col-md-9 col-9 p-3 d-flex justify-content-lg-start justify-content-md-start justify-content-center"},c.a.createElement(p,{sort_by:this.state.sort_by,updateSortBy:this.updateSortBy})),c.a.createElement("div",{className:"col-lg-3 col-md-3 col-3 d-flex justify-content-center align-items-center flex-lg-row flex-md-row flex-column align-items-center",style:{background:"#aaa",fontSize:"24px",textAlign:"center"}},c.a.createElement("p",{className:"m-0"},"Will watch:"),c.a.createElement("p",{className:"m-0 ml-lg-3 ml-md-3 text-primary"},this.state.moviesWillWatch.length)))),c.a.createElement(h,{page:this.state.page,updatePage:this.updatePage,totalPages:this.state.total_pages}),c.a.createElement("div",{className:"cards"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row mt-4"},this.state.movies.map(function(t){return c.a.createElement(d,{key:t.id,movie:t,removeMovie:e.removeMovie,addMovieToWillWatch:e.addMovieToWillWatch,removeMovieFromWillWatch:e.removeMovieFromWillWatch})})))),c.a.createElement(h,{page:this.state.page,updatePage:this.updatePage,totalPages:this.state.total_pages}))}}]),a}(c.a.Component),y=(a(15),document.getElementById("root"));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(b,null)),y)},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.dd84f76b.chunk.js.map