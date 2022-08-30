<template>
    <div class="footer">
        <div class="link-box warp">
            <div class="box-left">
                <div class="footer-bilibili">
                    <span class="bilibili-title">bilibili</span>
                    <ul class="bilibili-list">
                        <li><a href="#">关于我们</a></li>
                        <li><a href="#">联系方式</a></li>
                        <li><a href="#">用户协议</a></li>
                        <li><a href="#">加入我们</a></li>
                        <li><a href="#">友情链接</a></li>
                        <li><a href="#">隐私政策</a></li>
                        <li><a href="#">bilibili认证</a></li>
                        <li><a href="#">Investor Relations</a></li>
                    </ul>
                </div>
                <div class="footer-passgate">
                    <span class="bilibili-title">传送门</span>
                    <ul class="passgate-list">
                        <li><a href="#">协议汇总</a></li>
                        <li><a href="#">活动中心</a></li>
                        <li><a href="#">活动专题页</a></li>
                        <li><a href="#">侵权申诉</a></li>
                        <li><a href="#">帮助中心</a></li>
                        <li><a href="#">社区中心</a></li>
                        <li><a href="#">壁纸站</a></li>
                        <li><a href="#">广告合作</a></li>
                        <li><a href="#">名人堂</a></li>
                        <li><a href="#">MCN管理中心</a></li>
                        <li><a href="#">高级弹幕</a></li>
                        <li><a href="#">品牌号官网</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-icon">
                <ul class="footer-icon-list">
                    <li>
                        <a href="#">
                            <img
                                src="../assets/icon/download-icon.png"
                                alt="DownloadAPP"
                            />
                            <p>下载APP</p>
                        </a>
                        <div class="footer-qrcode download-qrcode">
                            <img
                                src="../assets/qrcode/biliapp_qrcode.png"
                                alt=""
                                srcset=""
                            />
                        </div>
                    </li>
                    <li>
                        <a href="#">
                            <img
                                src="../assets/icon/charity-icon.png"
                                alt="Charity"
                            />
                            <p>公益</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img
                                src="../assets/icon/weibo-icon.png"
                                alt="Weibo"
                            />
                            <p>新浪微博</p>
                        </a>
                        <div class="footer-qrcode weibo-qrcode">
                            <img
                                src="../assets/qrcode/weibo_qrcode.png"
                                alt=""
                            />
                        </div>
                    </li>
                    <li>
                        <a href="#">
                            <img
                                src="../assets/icon/weixin-icon.png"
                                alt="Wechat"
                            />
                            <p>官方微信</p>
                        </a>
                        <div class="footer-qrcode weixin-qrcode">
                            <img
                                src="../assets/qrcode/weixin_qrcode.gif"
                                alt=""
                            />
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="footer-siteInfo warp">
            <div class="pic-box">
                <img src="../assets/partner.png" alt="" />
                <img
                    src="../assets/pic962110.png"
                    alt=""
                    style="width: 100px"
                />
            </div>
            <div class="site-info">
                <p>
                    <span><a href="">营业执照</a></span>
                    <span>信息网络传播视听节目许可证：0910417</span>
                    <span>网络文化经营许可证 沪网文【2019】3804-274号</span>
                    <span>广播电视节目制作经营许可证：（沪）字第01248号</span>
                    <span>增值电信业务经营许可证 沪B2-20100043</span>
                    <span>互联网ICP备案：沪ICP备13002172号-3</span>
                </p>
                <p>
                    <span>出版物经营许可证 沪批字第U6699 号</span>
                    <span>互联网药品信息服务资格证 沪-非经营性-2016-0143</span>
                    <span>营业性演出许可证 沪市文演（经）00-2253</span>
                </p>
                <p>
                    <span
                        >不良信息举报邮箱：help@bilibili.com |
                        涉未成年举报邮箱：teenprotect@bilibili.com |
                        不良信息举报电话：4006262233转1</span
                    >
                </p>
                <p>
                    <span><a href="">上海互联网举报中心</a>|</span>
                    <span><a href="">12345政务服务便民热线</a>|</span>
                    <span><a href="">沪公网安备31011002002436号</a>|</span>
                    <span><a href="">儿童色情信息举报专区</a>|</span>
                    <span><a href="">扫黄打非举报</a>|</span>
                </p>
                <p>
                    <span
                        >网上有害信息举报专区：<a href=""
                            >中国互联网违法和不良信息举报中心</a
                        ></span
                    >
                </p>
                <p>
                    <span
                        >亲爱的市民朋友，上海警方反诈劝阻电话“96110”系专门针对避免您财产被骗受损而设，请您一旦收到来电，立即接听。</span
                    >
                </p>
                <p>
                    <span
                        >公司名称：上海宽娱数码科技有限公司|公司地址：上海市杨浦区政立路485号|电话：021-25099888</span
                    >
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "InternationalFooter",
};
</script>

<style lang="less" scoped>
@footer-width: 150px;
.footer {
    background-color: #f6f9fa;
    padding: 30px 0;
    margin: 0 auto;
    width: 100%;
    min-width: 999px;

    .link-box {
        margin: 5px auto;
        display: flex;
        height: @footer-width;
        justify-content: space-between;
        min-width: 999px;
        max-width: 1630px;

        .box-left {
            flex-grow: 4;
            flex-shrink: 1;
            flex-basis: 0;
            display: flex;
            justify-content: space-between;
        }

        .bilibili-title {
            display: block;
            color: #999;
            font-size: 16px;
            height: 20px;
            margin-bottom: 20px;
        }

        .bilibili-list {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            height: 110px;

            & > li {
                height: 20px;
                margin-bottom: 10px;
                width: 50%;
                font-size: 14px;

                &:hover a {
                    color: #73c9e5;
                }

                & > a {
                    text-decoration: none;
                    color: #212121;
                    transition: color 0.3s ease;
                }
            }

            & > li:nth-child(4n) {
                margin-bottom: 0;
            }
        }

        .passgate-list {
            flex-grow: 2;
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            height: 110px;

            & > li {
                height: 20px;
                margin-bottom: 10px;
                width: 33.3%;
                font-size: 14px;

                &:hover a {
                    transition: color 0.3s ease;
                    color: #73c9e5;
                }

                & > a {
                    text-decoration: none;
                    color: #212121;
                    transition: color 0.3s ease;
                }
            }

            & > li:nth-child(4n) {
                margin-bottom: 0;
            }
        }

        .footer-bilibili {
            padding-right: 40px;
            border-right: 1px solid #eee;
            margin-right: 40px;
            flex-grow: 2;
        }

        .footer-passgate {
            padding-right: 40px;
            border-right: 1px solid #eee;
            margin-right: 40px;
            flex-grow: 3;
        }

        .footer-icon {
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 150px;
            flex-grow: 1;
            flex-shrink: 1;
            flex-basis: 0;

            .footer-icon-list {
                display: flex;
                flex-grow: 2;
                flex-shrink: 1;
                flex-basis: 0%;
                flex-direction: row;
                justify-content: space-between;
                margin: 0;
                padding: 0;

                & > li {
                    min-width: 70px;
                    position: relative;
                    top: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-grow: 1;
                    flex-shrink: 1;
                    flex-basis: 0%;

                    .footer-qrcode {
                        padding: 10px;
                        background-color: #fff;
                        display: none;
                        border: 1px solid #eee;
                    }

                    .download-qrcode {
                        position: absolute;
                        left: -23px;
                        top: -135px;

                        & > img {
                            vertical-align: top;
                        }
                    }

                    .weibo-qrcode {
                        position: absolute;
                        left: -23px;
                        top: -135px;

                        & > img {
                            width: 97px;
                            height: 97px;
                            vertical-align: top;
                        }
                    }

                    .weixin-qrcode {
                        position: absolute;
                        right: 0;
                        top: -161px;

                        & > img {
                            vertical-align: top;
                        }
                    }

                    & a {
                        flex-grow: 1;
                        text-decoration: none;
                        color: #212121;
                        transition: color 0.3s ease;
                        font-size: 14px;

                        & > img {
                            display: block;
                            margin: 0 auto;
                            width: 50px;
                            height: 50px;
                        }

                        & > p {
                            margin-top: 10px;
                            text-align: center;
                        }
                    }

                    & a:hover {
                        transition: color 0.3s ease;
                        color: #73c9e5;
                    }

                    & a:hover + div {
                        display: block;
                    }
                }
            }
        }
    }

    .footer-siteInfo {
        display: flex;
        padding-top: 30px;
        margin: 0 auto;
        min-width: 999px;
        max-width: 1630px;

        .pic-box {
            width: 100px;
            margin-right: 20px;

            & > img {
                display: block;
            }
        }

        .site-info {
            flex-grow: 1;

            & > p {
                & > span {
                    display: inline-block;
                    margin-right: 15px;
                    color: #999999;
                    line-height: 24px;

                    & a {
                        text-decoration: none;
                        color: #999999;
                    }
                }
            }
        }
    }
}
</style>