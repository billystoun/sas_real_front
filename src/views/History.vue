<template>
    <div>
        <div class="row">
            <div style="width:80%">
                <h1>ИСТОРИЯ ЗАПРОСОВ</h1>
            </div>
            <div style="width:20%;text-align:right">
                <button @click="logOut" class="btn btn--orange">Выход</button>
            </div>
        </div>
        <div class="row">
            <div class="col col-1">
                <div class="card">
                    <h2>Запросы</h2>
                    <div class="card-stats">
                        <div class="card">
                            <div class="card-body">
                                <div class="statistics statistics-horizontal">
                                    <div class="info info-horizontal">
                                        <div class="left">
                                            <div class="icon icon-primary icon-circle">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="22"
                                                    height="22"
                                                >
                                                    <path
                                                        d="M3.3 17.6a.367.367 0 0 0 0 .733h3.667a.367.367 0 0 0 0-.733H6.6V8.8h.367a.367.367 0 0 0 0-.733H3.3a.367.367 0 0 0 0 .733h.367v8.8H3.3zm1.1-8.8h1.467v8.8H4.4V8.8zM.367 7.333h21.266a.367.367 0 0 0 .193-.678L11.193.055a.367.367 0 0 0-.386 0L.174 6.655a.367.367 0 0 0 .193.678zM11 .798L20.347 6.6H1.653L11 .798zM1.467 19.433c0 .203.164.367.366.367h18.334a.367.367 0 0 0 0-.733H1.833a.367.367 0 0 0-.366.366zM21.633 20.533H.367A.367.367 0 0 0 0 20.9v.733a.367.367 0 0 0 .733 0v-.366h20.534v.366a.367.367 0 0 0 .733 0V20.9a.367.367 0 0 0-.367-.367zM9.167 17.6a.367.367 0 0 0 0 .733h3.666a.367.367 0 0 0 0-.733h-.366V8.8h.366a.367.367 0 0 0 0-.733H9.167a.367.367 0 0 0 0 .733h.366v8.8h-.366zm1.1-8.8h1.466v8.8h-1.466V8.8zM15.033 17.6a.367.367 0 0 0 0 .733H18.7a.367.367 0 0 0 0-.733h-.367V8.8h.367a.367.367 0 0 0 0-.733h-3.667a.367.367 0 0 0 0 .733h.367v8.8h-.367zm1.1-8.8H17.6v8.8h-1.467V8.8z"
                                                    ></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="right">
                                            <h3 class="info-title">{{ fullHistory.length }}</h3>
                                            <h6 class="stats-title">Оценок</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr>
                            <div class="card-footer">
                                <div class="stats">
                                    <span class="icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="14"
                                            height="14"
                                        >
                                            <path
                                                d="M12.613 1.226h-1.415V.511c0-.276-.227-.5-.506-.5a.503.503 0 0 0-.507.5v.715h-6.37V.511c0-.276-.227-.5-.507-.5a.503.503 0 0 0-.506.5v.715H1.387c-.758 0-1.375.609-1.375 1.357v10.049c0 .748.617 1.356 1.375 1.356h11.226c.758 0 1.375-.608 1.375-1.356V2.582c0-.747-.617-1.356-1.375-1.356zM1.025 2.583a.36.36 0 0 1 .362-.357h1.415v.57c0 .276.227.5.506.5.28 0 .507-.224.507-.5v-.57h6.37v.57c0 .276.227.5.507.5s.506-.224.506-.5v-.57h1.415c.2 0 .362.16.362.357v1.256H1.025V2.583zm11.95 10.049a.36.36 0 0 1-.362.357H1.387a.36.36 0 0 1-.362-.357V4.838h11.95v7.794z"
                                            ></path>
                                            <path
                                                d="M12.613 14H1.387A1.379 1.379 0 0 1 0 12.632V2.582c0-.754.622-1.367 1.387-1.367H2.79V.51C2.79.23 3.022 0 3.308 0c.286 0 .519.23.519.511v.704h6.346V.51c0-.282.233-.511.519-.511.286 0 .518.23.518.511v.704h1.403c.765 0 1.387.613 1.387 1.368v10.049c0 .754-.622 1.368-1.387 1.368zM1.387 1.238c-.752 0-1.363.603-1.363 1.345v10.049c0 .741.611 1.345 1.363 1.345h11.226c.752 0 1.363-.604 1.363-1.345V2.582c0-.74-.611-1.344-1.363-1.344h-1.427V.51a.492.492 0 0 0-.494-.488.492.492 0 0 0-.495.488v.727H3.803V.51a.492.492 0 0 0-.495-.488.492.492 0 0 0-.494.488v.727H1.387zM12.613 13H1.387a.372.372 0 0 1-.374-.369V4.827h11.974v7.805a.372.372 0 0 1-.374.369zM1.037 4.85v7.781c0 .19.157.345.35.345h11.226c.193 0 .35-.155.35-.345V4.85H1.037zm11.95-1H1.013V2.583c0-.204.168-.369.374-.369h1.427v.582c0 .269.222.488.494.488a.492.492 0 0 0 .495-.488v-.582h6.394v.582c0 .269.222.488.495.488a.492.492 0 0 0 .494-.488v-.582h1.427c.206 0 .374.165.374.369V3.85zm-11.95-.024h11.926V2.583a.348.348 0 0 0-.35-.346H11.21v.559a.515.515 0 0 1-.518.511.515.515 0 0 1-.519-.511v-.559H3.827v.559a.515.515 0 0 1-.519.511.515.515 0 0 1-.518-.511v-.559H1.387a.348.348 0 0 0-.35.346v1.244z"
                                            ></path>
                                        </svg>
                                    </span>
                                    за все время
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <div class="statistics statistics-horizontal">
                                    <div class="info info-horizontal">
                                        <div class="left">
                                            <div class="icon icon-warning icon-circle">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 512.003 512.003"
                                                >
                                                    <path
                                                        d="M76.802 409.602c-4.71 0-8.533 3.823-8.533 8.533s3.823 8.533 8.533 8.533h85.333c4.71 0 8.533-3.823 8.533-8.533s-3.823-8.533-8.533-8.533h-8.533v-204.8h8.533c4.71 0 8.533-3.823 8.533-8.533s-3.823-8.533-8.533-8.533H76.802c-4.71 0-8.533 3.823-8.533 8.533s3.823 8.533 8.533 8.533h8.533v204.8h-8.533zm25.6-204.8h34.133v204.8h-34.133v-204.8zM8.535 170.668h494.933a8.536 8.536 0 0 0 8.209-6.195 8.541 8.541 0 0 0-3.712-9.591L260.499 1.282a8.538 8.538 0 0 0-8.994 0L4.038 154.882a8.543 8.543 0 0 0-3.712 9.591 8.535 8.535 0 0 0 8.209 6.195zM256.002 18.579l217.54 135.023H38.461L256.002 18.579zM34.135 452.268a8.536 8.536 0 0 0 8.533 8.533h426.667a8.536 8.536 0 0 0 8.533-8.533 8.536 8.536 0 0 0-8.533-8.533H42.668a8.536 8.536 0 0 0-8.533 8.533zM503.468 477.868H8.535a8.536 8.536 0 0 0-8.533 8.533v17.067c0 4.71 3.823 8.533 8.533 8.533s8.533-3.823 8.533-8.533v-8.533h477.867v8.533c0 4.71 3.823 8.533 8.533 8.533s8.533-3.823 8.533-8.533v-17.067c.001-4.71-3.822-8.533-8.533-8.533zM213.335 409.602c-4.71 0-8.533 3.823-8.533 8.533s3.823 8.533 8.533 8.533h85.333c4.71 0 8.533-3.823 8.533-8.533s-3.823-8.533-8.533-8.533h-8.533v-204.8h8.533c4.71 0 8.533-3.823 8.533-8.533s-3.823-8.533-8.533-8.533h-85.333c-4.71 0-8.533 3.823-8.533 8.533s3.823 8.533 8.533 8.533h8.533v204.8h-8.533zm25.6-204.8h34.133v204.8h-34.133v-204.8zM349.868 409.602c-4.71 0-8.533 3.823-8.533 8.533s3.823 8.533 8.533 8.533h85.333c4.71 0 8.533-3.823 8.533-8.533s-3.823-8.533-8.533-8.533h-8.533v-204.8h8.533c4.71 0 8.533-3.823 8.533-8.533s-3.823-8.533-8.533-8.533h-85.333c-4.71 0-8.533 3.823-8.533 8.533s3.823 8.533 8.533 8.533h8.533v204.8h-8.533zm25.6-204.8h34.133v204.8h-34.133v-204.8z"
                                                    ></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="right">
                                            <h3 class="info-title">{{ ratingsLastWeek.length }}</h3>
                                            <h6 class="stats-title">ОЦЕНОК</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr>
                            <div class="card-footer">
                                <div class="stats">
                                    <span class="icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="14"
                                            height="14"
                                        >
                                            <path
                                                d="M12.613 1.226h-1.415V.511c0-.276-.227-.5-.506-.5a.503.503 0 0 0-.507.5v.715h-6.37V.511c0-.276-.227-.5-.507-.5a.503.503 0 0 0-.506.5v.715H1.387c-.758 0-1.375.609-1.375 1.357v10.049c0 .748.617 1.356 1.375 1.356h11.226c.758 0 1.375-.608 1.375-1.356V2.582c0-.747-.617-1.356-1.375-1.356zM1.025 2.583a.36.36 0 0 1 .362-.357h1.415v.57c0 .276.227.5.506.5.28 0 .507-.224.507-.5v-.57h6.37v.57c0 .276.227.5.507.5s.506-.224.506-.5v-.57h1.415c.2 0 .362.16.362.357v1.256H1.025V2.583zm11.95 10.049a.36.36 0 0 1-.362.357H1.387a.36.36 0 0 1-.362-.357V4.838h11.95v7.794z"
                                            ></path>
                                            <path
                                                d="M12.613 14H1.387A1.379 1.379 0 0 1 0 12.632V2.582c0-.754.622-1.367 1.387-1.367H2.79V.51C2.79.23 3.022 0 3.308 0c.286 0 .519.23.519.511v.704h6.346V.51c0-.282.233-.511.519-.511.286 0 .518.23.518.511v.704h1.403c.765 0 1.387.613 1.387 1.368v10.049c0 .754-.622 1.368-1.387 1.368zM1.387 1.238c-.752 0-1.363.603-1.363 1.345v10.049c0 .741.611 1.345 1.363 1.345h11.226c.752 0 1.363-.604 1.363-1.345V2.582c0-.74-.611-1.344-1.363-1.344h-1.427V.51a.492.492 0 0 0-.494-.488.492.492 0 0 0-.495.488v.727H3.803V.51a.492.492 0 0 0-.495-.488.492.492 0 0 0-.494.488v.727H1.387zM12.613 13H1.387a.372.372 0 0 1-.374-.369V4.827h11.974v7.805a.372.372 0 0 1-.374.369zM1.037 4.85v7.781c0 .19.157.345.35.345h11.226c.193 0 .35-.155.35-.345V4.85H1.037zm11.95-1H1.013V2.583c0-.204.168-.369.374-.369h1.427v.582c0 .269.222.488.494.488a.492.492 0 0 0 .495-.488v-.582h6.394v.582c0 .269.222.488.495.488a.492.492 0 0 0 .494-.488v-.582h1.427c.206 0 .374.165.374.369V3.85zm-11.95-.024h11.926V2.583a.348.348 0 0 0-.35-.346H11.21v.559a.515.515 0 0 1-.518.511.515.515 0 0 1-.519-.511v-.559H3.827v.559a.515.515 0 0 1-.519.511.515.515 0 0 1-.518-.511v-.559H1.387a.348.348 0 0 0-.35.346v1.244z"
                                            ></path>
                                        </svg>
                                    </span>
                                    за последнюю неделю
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-body">
                                <div class="statistics statistics-horizontal">
                                    <div class="info info-horizontal">
                                        <div class="left">
                                            <div class="icon icon-primary icon-circle">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="22"
                                                    height="22"
                                                >
                                                    <path
                                                        d="M9.528 12.59a4.46 4.46 0 0 0-.097.917c0 .104.009.207.016.31H.614A.614.614 0 0 1 0 13.202V3.79c0-.338.275-.613.614-.613h19.108c.339 0 .613.275.613.613v7.327l-1.227-.464V6.246a1.436 1.436 0 0 1-1.89-1.84L3.08 4.404a1.432 1.432 0 0 1-1.854 1.854v4.382a1.436 1.436 0 0 1 1.814 1.948h6.487zm1.745-2.681H8.912c0-.565.337-1.05.821-1.266a1.014 1.014 0 1 1 1.046-.035c.452.167.792.563.882 1.048a4.41 4.41 0 0 1 1.199-.477 2.734 2.734 0 0 0-1.041-2.815h1.304v-1.35h-5.91v1.35h1.349a2.734 2.734 0 0 0-.17 4.267h-1.18v1.35h2.495a4.466 4.466 0 0 1 1.566-2.072zm2.61 6.529a2.89 2.89 0 1 1 2.106-4.864c.245-.148.505-.27.779-.365a3.715 3.715 0 1 0-2.205 5.99 4.086 4.086 0 0 1-.359-.78 2.977 2.977 0 0 1-.32.019zm.687-5.047h-.758l-.032.168c-.044.23-.179.535-.842.535h-.207v.802h.207c.286 0 .526-.03.724-.09v2.927h.377a4.074 4.074 0 0 1-.053-.626c0-.77.215-1.488.583-2.106v-1.61zM22 15.106a3.715 3.715 0 1 1-7.43.001 3.715 3.715 0 0 1 7.43 0zm-.825 0a2.89 2.89 0 1 0-5.779 0 2.89 2.89 0 0 0 5.779 0zm-2.993-1.99c-.044.23-.179.536-.842.536h-.207v.803h.207c.287 0 .527-.03.724-.09v2.926h.908V12.95h-.758l-.032.168z"
                                                    ></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="right">
                                            <h3 class="info-title">3.3</h3>
                                            <h6 class="stats-title">МЛН. РУБ.</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr>
                            <div class="card-footer">
                                <div class="stats">
                                    <span class="icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="14"
                                            height="14"
                                        >
                                            <path
                                                d="M12.613 1.226h-1.415V.511c0-.276-.227-.5-.506-.5a.503.503 0 0 0-.507.5v.715h-6.37V.511c0-.276-.227-.5-.507-.5a.503.503 0 0 0-.506.5v.715H1.387c-.758 0-1.375.609-1.375 1.357v10.049c0 .748.617 1.356 1.375 1.356h11.226c.758 0 1.375-.608 1.375-1.356V2.582c0-.747-.617-1.356-1.375-1.356zM1.025 2.583a.36.36 0 0 1 .362-.357h1.415v.57c0 .276.227.5.506.5.28 0 .507-.224.507-.5v-.57h6.37v.57c0 .276.227.5.507.5s.506-.224.506-.5v-.57h1.415c.2 0 .362.16.362.357v1.256H1.025V2.583zm11.95 10.049a.36.36 0 0 1-.362.357H1.387a.36.36 0 0 1-.362-.357V4.838h11.95v7.794z"
                                            ></path>
                                            <path
                                                d="M12.613 14H1.387A1.379 1.379 0 0 1 0 12.632V2.582c0-.754.622-1.367 1.387-1.367H2.79V.51C2.79.23 3.022 0 3.308 0c.286 0 .519.23.519.511v.704h6.346V.51c0-.282.233-.511.519-.511.286 0 .518.23.518.511v.704h1.403c.765 0 1.387.613 1.387 1.368v10.049c0 .754-.622 1.368-1.387 1.368zM1.387 1.238c-.752 0-1.363.603-1.363 1.345v10.049c0 .741.611 1.345 1.363 1.345h11.226c.752 0 1.363-.604 1.363-1.345V2.582c0-.74-.611-1.344-1.363-1.344h-1.427V.51a.492.492 0 0 0-.494-.488.492.492 0 0 0-.495.488v.727H3.803V.51a.492.492 0 0 0-.495-.488.492.492 0 0 0-.494.488v.727H1.387zM12.613 13H1.387a.372.372 0 0 1-.374-.369V4.827h11.974v7.805a.372.372 0 0 1-.374.369zM1.037 4.85v7.781c0 .19.157.345.35.345h11.226c.193 0 .35-.155.35-.345V4.85H1.037zm11.95-1H1.013V2.583c0-.204.168-.369.374-.369h1.427v.582c0 .269.222.488.494.488a.492.492 0 0 0 .495-.488v-.582h6.394v.582c0 .269.222.488.495.488a.492.492 0 0 0 .494-.488v-.582h1.427c.206 0 .374.165.374.369V3.85zm-11.95-.024h11.926V2.583a.348.348 0 0 0-.35-.346H11.21v.559a.515.515 0 0 1-.518.511.515.515 0 0 1-.519-.511v-.559H3.827v.559a.515.515 0 0 1-.519.511.515.515 0 0 1-.518-.511v-.559H1.387a.348.348 0 0 0-.35.346v1.244z"
                                            ></path>
                                        </svg>
                                    </span>
                                    средняя расчетная стоимость
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <div class="statistics statistics-horizontal">
                                    <div class="info info-horizontal">
                                        <div class="left">
                                            <div class="icon icon-circle">
                                                <span class="icon">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="22"
                                                        height="22"
                                                    >
                                                        <path
                                                            d="M18.857 13.2V7.333C18.857 3.283 15.34 0 11 0 6.66 0 3.143 3.283 3.143 7.333V13.2L0 19.067h7.15C7.516 20.74 9.1 22 11 22c1.9 0 3.485-1.26 3.85-2.933H22L18.857 13.2zM11 20.533c-1.025 0-1.888-.613-2.213-1.466h4.426c-.325.853-1.188 1.466-2.213 1.466zM2.357 17.6l2.357-4.4V7.333c0-3.24 2.815-5.866 6.286-5.866 3.471 0 6.286 2.626 6.286 5.866V13.2l2.357 4.4H2.357z"
                                                        ></path>
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="right">
                                            <h3 class="info-title">-14.69%</h3>
                                            <h6 class="stats-title">ОТКЛОНЕНИЕ</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr>
                            <div class="card-footer">
                                <div class="stats">
                                    <span class="icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="14"
                                            height="14"
                                        >
                                            <path
                                                d="M12.613 1.226h-1.415V.511c0-.276-.227-.5-.506-.5a.503.503 0 0 0-.507.5v.715h-6.37V.511c0-.276-.227-.5-.507-.5a.503.503 0 0 0-.506.5v.715H1.387c-.758 0-1.375.609-1.375 1.357v10.049c0 .748.617 1.356 1.375 1.356h11.226c.758 0 1.375-.608 1.375-1.356V2.582c0-.747-.617-1.356-1.375-1.356zM1.025 2.583a.36.36 0 0 1 .362-.357h1.415v.57c0 .276.227.5.506.5.28 0 .507-.224.507-.5v-.57h6.37v.57c0 .276.227.5.507.5s.506-.224.506-.5v-.57h1.415c.2 0 .362.16.362.357v1.256H1.025V2.583zm11.95 10.049a.36.36 0 0 1-.362.357H1.387a.36.36 0 0 1-.362-.357V4.838h11.95v7.794z"
                                            ></path>
                                            <path
                                                d="M12.613 14H1.387A1.379 1.379 0 0 1 0 12.632V2.582c0-.754.622-1.367 1.387-1.367H2.79V.51C2.79.23 3.022 0 3.308 0c.286 0 .519.23.519.511v.704h6.346V.51c0-.282.233-.511.519-.511.286 0 .518.23.518.511v.704h1.403c.765 0 1.387.613 1.387 1.368v10.049c0 .754-.622 1.368-1.387 1.368zM1.387 1.238c-.752 0-1.363.603-1.363 1.345v10.049c0 .741.611 1.345 1.363 1.345h11.226c.752 0 1.363-.604 1.363-1.345V2.582c0-.74-.611-1.344-1.363-1.344h-1.427V.51a.492.492 0 0 0-.494-.488.492.492 0 0 0-.495.488v.727H3.803V.51a.492.492 0 0 0-.495-.488.492.492 0 0 0-.494.488v.727H1.387zM12.613 13H1.387a.372.372 0 0 1-.374-.369V4.827h11.974v7.805a.372.372 0 0 1-.374.369zM1.037 4.85v7.781c0 .19.157.345.35.345h11.226c.193 0 .35-.155.35-.345V4.85H1.037zm11.95-1H1.013V2.583c0-.204.168-.369.374-.369h1.427v.582c0 .269.222.488.494.488a.492.492 0 0 0 .495-.488v-.582h6.394v.582c0 .269.222.488.495.488a.492.492 0 0 0 .494-.488v-.582h1.427c.206 0 .374.165.374.369V3.85zm-11.95-.024h11.926V2.583a.348.348 0 0 0-.35-.346H11.21v.559a.515.515 0 0 1-.518.511.515.515 0 0 1-.519-.511v-.559H3.827v.559a.515.515 0 0 1-.519.511.515.515 0 0 1-.518-.511v-.559H1.387a.348.348 0 0 0-.35.346v1.244z"
                                            ></path>
                                        </svg>
                                    </span>
                                    среднее за все время
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="!history">Загрузка..</div>
                    <div v-if="history" class="table-scroll">
                        <table class="styled-table scale-font">
                            <thead>
                                <tr>
                                    <th
                                        class="cursor"
                                        v-for="(name, index) in paramName"
                                        :key="index"
                                        v-tooltip="name.title"
                                    >
                                        <div>{{ name.title }}</div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                    v-for="(request, index) in history"
                                    :key="index"
                                    @click="getAnalogsById(request.id)"
                                    class="request"
                                >
                                    <td>{{ request.id }}</td>
                                    <td>{{ request.datetime }}</td>
                                    <td>{{ request.totalarea }}</td>
                                    <td>{{ request.roomsnum }}</td>
                                    <td>{{ request.storey }}</td>
                                    <td>{{ request.storeysnum }}</td>
                                    <td>{{ request.buildingtype }}</td>
                                    <td>{{ request.rawaddress }}</td>
                                    <td>{{ request.repairraw }}</td>
                                    <td>{{ request.buildingperiod }}</td>
                                    <td>{{ request.livingspacearea }}</td>
                                    <td>{{ request.kitchenarea }}</td>
                                    <td>{{ request.subwaytime }}</td>
                                    <td>{{ request.windowview }}</td>
                                    <td>{{ request.balconiesnum }}</td>
                                    <td>{{ transformNum(request.pricefromreport) }}</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr class="no-hover">
                                    <td :colspan="paramName.length" class="paginate-block">
                                        <div>
                                            <b-pagination
                                                size="sm"
                                                v-model.number="currentPage"
                                                :total-rows="fullHistory.length"
                                                :per-page="recordsPerPage"
                                            ></b-pagination>
                                            <ul class="pagination">
                                                <li>
                                                    <label
                                                        :class="[(recordsPerPage===5) ? 'active' : 'disabled', 'page-item']"
                                                    >
                                                        <input
                                                            type="radio"
                                                            value="5"
                                                            v-model.number="recordsPerPage"
                                                        >
                                                        <span>5</span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label
                                                        :class="[(recordsPerPage===10) ? 'active' : 'disabled', 'page-item']"
                                                    >
                                                        <input
                                                            type="radio"
                                                            value="10"
                                                            v-model.number="recordsPerPage"
                                                        >
                                                        <span>10</span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label
                                                        :class="[(recordsPerPage===25) ? 'active' : 'disabled', 'page-item']"
                                                    >
                                                        <input
                                                            type="radio"
                                                            value="25"
                                                            v-model.number="recordsPerPage"
                                                        >
                                                        <span>25</span>
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import historyParamNameDict from "../configs/historyParamNameDict.json";
export default {
    data() {
        return {
            paramName: historyParamNameDict.params,
            url: historyParamNameDict.url,
            history: false,
            fullHistory: false,
            currentPage: 1,
            recordsPerPage: 10,
            ratingsLastWeek: false
        };
    },
    mounted() {
        const data = {
            token: localStorage.getItem("token")
        };
        fetch(this.url, {
            method: "POST",
            headers: {
                "Content-type":
                    "application/x-www-form-urlencoded; charset=UTF-8"
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                if (response.status !== 200) {
                    return;
                }
                response.json().then(data => {
                    this.fullHistory = data.reverse();
                    this.togglePage();
                    this.getLastRatings();
                });
            })
            .catch(err => {
                return err;
            });
    },
    watch: {
        currentPage() {
            this.togglePage();
        },
        recordsPerPage() {
            this.togglePage();
        }
    },
    methods: {
        togglePage() {
            let arr = [];
            for (
                let i = (this.currentPage - 1) * this.recordsPerPage;
                i < this.currentPage * this.recordsPerPage;
                i++
            ) {
                if (this.fullHistory[i] === undefined) {
                    break;
                }
                arr.push(this.fullHistory[i]);
            }
            this.history = arr;
        },
        getLastRatings() {
            const arr = [];
            const today = new Date();
            const lastWeek = new Date(
                today.getFullYear(),
                today.getMonth(),
                today.getDate() - 7
            );
            this.fullHistory.forEach(el => {
                const d = new Date(el.datetime);
                if (d > lastWeek) {
                    arr.push(el);
                }
            });
            this.ratingsLastWeek = arr;
        },
        transformNum(n) {
            let num = Math.round(n);
            num += "";
            num = new Array(4 - (num.length % 3)).join("U") + num;
            return num.replace(/([0-9U]{3})/g, "$1 ").replace(/U/g, "");
        },
        logOut() {
            localStorage.removeItem("token");
            this.$emit("trueAuth", false);
            this.$router.push("/");
        },
        getAnalogsById(id) {
            const data = {
                request_id: id,
                token: localStorage.getItem("token")
            };
            fetch(
                "https://realestate.eliz.site/get_history_by_userid_and_requestid",
                {
                    method: "POST",
                    headers: {
                        "Content-type":
                            "application/x-www-form-urlencoded; charset=UTF-8"
                    },
                    body: JSON.stringify(data)
                }
            )
                .then(response => {
                    if (response.status !== 200) {
                        return;
                    }
                    response.json().then(data => {
                        this.$router.push({
                            name: "historyid",
                            params: { id: id, data: data }
                        });
                    });
                })
                .catch(err => {
                    return err;
                });
        }
    }
};
</script>

<style lang="scss">
.card-stats {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
    .card {
        width: 24%;
        padding: 0;
    }
}

.card .card-body {
    padding: 15px 15px 10px;
}

.card-stats .statistics {
    position: relative;
    text-align: center;
    padding: 15px 0;
}
.card-stats .statistics.statistics-horizontal,
.card-stats .statistics.statistics-horizontal .info-title {
    padding: 0;
}
.info-horizontal {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .right {
        text-align: right;
        h3 {
            font-size: 30px;
            line-height: 30px;
            margin: 0;
        }
        h6 {
            font-size: 14px;
            line-height: 25px;
            margin: 0;
            text-transform: uppercase;
        }
    }
}

.info-horizontal .icon.icon-circle {
    width: 65px;
    height: 65px;
    max-width: 65px;
    margin-top: 8px;
}
.info .icon.icon-circle {
    max-width: 70px;
    width: 70px;
    height: 70px;
    margin: 0 auto;
    border-radius: 50%;
    box-shadow: 0 9px 30px -6px rgba(44, 168, 255, 0.5);
    font-size: 0.7142em;
    background-color: #fff;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    svg,
    svg * {
        width: 22px;
        height: 22px;
    }
    .icon__14 {
        height: 21px;
        *,
        svg * {
            height: 21px;
        }
    }
}

.icon.icon-primary.icon-circle {
    box-shadow: 0 9px 30px -6px rgba(249, 99, 50, 0.5);
}

.icon.icon-primary {
    color: #f96332;
    * {
        fill: #f96332;
    }
}
.icon.icon-warning.icon-circle {
    box-shadow: 0 9px 30px -6px rgba(255, 178, 54, 0.5);
}
.icon.icon-warning {
    color: #ffb236;
    * {
        fill: #ffb236;
    }
}
.info .info-title {
    margin: 15px 0 5px;
    padding: 0 15px;
    color: #2c2c2c;
    font-weight: 700;
}
.card-stats .statistics .stats-title {
    color: #9a9a9a;
    font-weight: 400;
}
.card-contributions hr,
.card-stats hr {
    margin: 5px 15px;
}
hr {
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
}
.card-footer {
    padding: 0.75rem 1.25rem;
}
.card .card-footer .stats .icon {
    svg,
    * {
        fill: #2c2c2c;
        width: 14px !important;
        height: 14px !important;
    }

    margin-right: 5px;
    position: relative;
    top: 2px;
}
.paginate-block {
    > div {
        display: flex;
        justify-content: space-between;
        ul {
            display: flex;
        }
        .pagination {
            label {
            }
            input {
                display: none;
            }
        }
    }
}
.request {
    cursor: pointer;
}
</style>
