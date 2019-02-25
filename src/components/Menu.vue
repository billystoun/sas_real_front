<template>
    <div id="nav" class="menu active" data-color="blue">
        <div class="top">
            <div class="logo">
                <router-link to="/">
                    <svg width="28" height="25" xmlns="http://www.w3.org/2000/svg">
                        <g fill="#FFF" fill-rule="evenodd">
                            <path
                                d="M8.664 0H28v19.691a7.526 7.526 0 0 1-2.157 3.37c-1.023.93-2.253 1.576-3.689 1.939H0l12.102-14.246h9.608l2.698-3.49H10.132L6.61 11.156V6.2c.148-.61.407-1.109.777-1.495.37-.386.87-.681 1.503-.885h15.518v14.6c-.147.768-.442 1.378-.886 1.829-.443.45-1.047.757-1.812.918H3.045V5.778c.372-1.521 1.004-2.74 1.894-3.655C5.83 1.207 7.071.499 8.664 0z"
                            ></path>
                            <path fill-opacity="0.843" d="M11 18l2.897-4H19l-3.124 4z"></path>
                        </g>
                    </svg>
                </router-link>
                <span class="menu__text-animation">FinCase</span>
            </div>
        </div>
        <hr>
        <nav>
            <router-link to="/search">
                <div class="icon">
                    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M14.665 12.898h-.927l-.328-.317a7.618 7.618 0 0 0 1.736-6.26C14.595 3.06 11.873.457 8.588.058 3.626-.55-.55 3.624.06 8.583c.4 3.283 3.004 6.003 6.265 6.554a7.63 7.63 0 0 0 6.265-1.735l.316.328v.927l4.986 4.982a1.24 1.24 0 0 0 1.748 0 1.238 1.238 0 0 0 0-1.747l-4.974-4.994zm-7.039 0a5.27 5.27 0 0 1-5.279-5.276 5.27 5.27 0 0 1 5.28-5.276 5.27 5.27 0 0 1 5.278 5.276 5.27 5.27 0 0 1-5.279 5.276z"
                            fill="none"
                            fill-rule="evenodd"
                        ></path>
                    </svg>
                </div>
                <span class="menu__text-animation">Новый запрос</span>
            </router-link>
            <router-link to="/history" :class="($route.name == 'hisory' || $route.name == 'historyid') ? 'router-link-exact-active' : ''">
                <div class="icon">
                    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M11.384 1.003c4.621.13 8.484 4.05 8.613 8.739.138 5.089-3.893 9.258-8.87 9.258a8.65 8.65 0 0 1-5.44-1.91c-.463-.36-.492-1.07-.078-1.49a.97.97 0 0 1 1.3-.08A6.733 6.733 0 0 0 11.128 17c3.844 0 6.948-3.189 6.899-7.098-.05-3.72-3.134-6.849-6.8-6.899-3.863-.05-6.997 3.1-6.997 6.999h1.764c.444 0 .66.54.355.85l-2.75 2.799c-.197.2-.502.2-.7 0l-2.749-2.8a.496.496 0 0 1 .345-.85h1.764c0-5.048 4.11-9.137 9.126-8.998zM10.632 6c.346 0 .633.329.633.715v3.286l2.428 1.652c.295.203.397.648.22.996-.178.338-.565.454-.869.25l-2.63-1.787a1.014 1.014 0 0 1-.414-.831V6.725c0-.396.287-.725.632-.725z"
                            fill="#fff"
                            fill-rule="evenodd"
                        ></path>
                    </svg>
                </div>
                <span class="menu__text-animation">История запросов</span>
            </router-link>
        </nav>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.menu {
    width: 88px;
    background: #141e30;
    box-shadow: 0px 0px 19px rgba(0, 0, 0, 0.5);
    position: fixed;
    height: 100%;
    top: 0;
    z-index: 1001;
    left: 0;
    padding: 20px;
    transition-property: top, bottom, width;
    transition-duration: 0.2s, 0.2s, 0.35s;
    transition-timing-function: linear, linear, ease;
    -webkit-overflow-scrolling: touch;
    overflow: hidden;

    &__text-animation {
        white-space: nowrap;
        transition: all 0.3s ease 0s;
        opacity: 0;
        transform: translate3d(-25px, 0, 0);
    }

    .top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-left: 9px;
        padding-bottom: 17px;
        .logo {
            display: flex;
            align-items: center;
            font-size: 18px;
            line-height: 20px;
            color: white;
            a {
                display: inline-block;
                margin-right: 14px;
                img {
                    display: block;
                }
            }
        }
    }
    nav {
        margin-top: 24px;
        a {
            height: 50px;
            display: flex;
            align-items: center;
            font-size: 14px;
            text-transform: uppercase;
            color: white;
            letter-spacing: 0.25px;
            text-decoration: none;
            cursor: pointer;
            margin-bottom: 12px;
            border-radius: 50px;
            transition: background 0.3s ease 0s;
            * {
                fill: white;
            }
            .icon {
                margin: 0 21px 0 13px;
                width: 20px;
                height: 20px;
            }
            &:not(.router-link-exact-active):hover {
                background-color: hsla(0, 0%, 100%, 0.1);
            }
            &.router-link-exact-active {
                color: #2ca8ff;
                background: white;

                box-shadow: 0px 0px 19px rgba(0, 0, 0, 0.15);
                cursor: default;
                .icon {
                    * {
                        transition: all 0.3s ease 0s;
                        fill: #141e30;
                    }
                }
            }
        }
    }
    &:hover {
        width: 280px;
        background: #2ca8ff;
        .menu__text-animation {
            opacity: 1;
            transform: translateZ(0);
        }
        nav {
            a {
                &.router-link-exact-active {
                    .icon {
                        * {
                            fill: #2ca8ff;
                        }
                    }
                }
            }
        }
    }
    hr {
        border: none;
        border-top: 1px solid #ffffff;
        margin: 0;
    }
}
</style>
