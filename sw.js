/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/06/23/hello-world/index.html","6b22ecaae6ba7e27f863cd0a155a583f"],["/2019/06/24/Openssh upgrade, from 7.5 to 7.9/index.html","51075a9418781388771c4d930107238b"],["/2019/06/24/maintence/index.html","1e42ff0f7ba3a960ae2d311c13bdda1a"],["/2019/06/24/ゴーストルール/index.html","e8fe5512c84b30248c8ee43e1d5cb679"],["/2019/06/29/「助詞」/index.html","c6cd3f019048ffaafe811d04511a7b3e"],["/2019/06/30/memo/index.html","cbfef1eb0b7d72ef4ada898059c377e7"],["/2019/07/01/Openssh_upgrade_from_7.5_to_8.0p1/index.html","67bb72f8a88720814701c6fa3e5d7239"],["/2019/07/01/vsftpd_upgrade_from_2.2.2_to_3.0.3/index.html","8287ec7e37018e9a300f7ef590f90bfb"],["/2019/07/02/「形容詞」/index.html","ebdcbbebe4a8d086f1dd909300521d69"],["/2019/07/03/MySQL_upgrade_from_5.5.*_to_5.7.*/index.html","a7e3e20a254014dcff6e9f0fbb067b54"],["/2019/07/03/PHP_upgrade_from_5.5.*_to_7.2.24/index.html","92b5ea165a34e543f63bfebccff4ccb7"],["/2019/07/06/ssh/index.html","7226257f17c9123abfb95676bd814b04"],["/2019/07/06/初识-ansible-1/index.html","4505ff3f5cef4fc0ee1bbb030b8e5773"],["/2019/07/08/Motrix+aria2_踩坑/index.html","5ea6248ca1363fab29bc9199b4641af9"],["/2019/07/08/初识-ansible-2/index.html","73ccaad3697e0bdd4e178d9b9a691271"],["/2019/07/08/初识-ansible-3/index.html","399e4306dc0e0218eba4afa72fd1113f"],["/2019/07/09/CentOS7/index.html","c5246304f4040f391e581bafcf9fea6f"],["/2019/07/13/CentOS7-backup/index.html","60a7d5e6c0ea9fd542f3944f724117da"],["/2019/07/14/Install-OpenSSH8-0p1-from-source/index.html","b42e41b111b452ec96df2e8e3b4b52e0"],["/2019/07/15/ansible-shell/index.html","f1414bf068868082ae9d66d7494d825c"],["/2019/07/23/「量詞」/index.html","4fafd1078917af9d6cbe5ea3246e4979"],["/2019/07/28/Redundancy and load balancing/index.html","5b22dbf5154b65aec727fb761f38a56a"],["/2019/08/26/wordpress后台登录加密/index.html","32709ba8faccce60afec2d1408472104"],["/2019/09/10/2019qwb/index.html","902c59f3dbfab867bc2aa5f6575ebb2e"],["/2019/09/23/wordpress_problem/index.html","e1ed80b7c5b39e591e1d4b044f265f57"],["/2019/10/04/计算智能入门/index.html","b0af040948592c4bd34364fdab1cf9d6"],["/2019/10/13/2019pico/index.html","824f70cfdf00e20266402a8d975cc586"],["/2019/10/17/2019hmb_guide/index.html","7602a9e530ba241bfe4a15058206aab2"],["/2019/10/18/2019hmb/index.html","86e6019be90c04bf1a27f18f9bf48fb3"],["/2019/11/18/乱七八糟/index.html","8f0ee8f5d0c0df95d2a65896904a9da1"],["/2019/12/04/计算智能实验/index.html","83a919ad711864c202ac1d84ac7afe6e"],["/2020/01/02/django踩坑记/index.html","132a0f0c64e66287224f93fef9d14be8"],["/2021/04/01/Wireshark入门与实战/index.html","3cfeeb0ea8a1bb5160dae633a271cbb9"],["/2021/04/01/手动分割线/index.html","1d4de946811e36984ab18c510c232bbe"],["/2021/04/03/2021hfctf/index.html","095877c3a12961be520225c728e60893"],["/2021/04/04/thread-modeling/index.html","ceb070c78564488004090d95288f80d6"],["/2021/04/06/ctfshow-unserialize/index.html","48d7f0e3f7866514576b2805e4a68441"],["/2021/04/25/ctfshow-ssrf/index.html","2a03667824e9658f7257e4bad4b9ec4f"],["/2021/04/26/xssrf/index.html","7da031bffdd95a01e6461de5240ac7e2"],["/2021/05/04/ctfshow-nodejs/index.html","fc5a96fd49301253993adbb05bbcbe58"],["/2021/05/06/2021CSTC-ctf/index.html","a1e3650e4f3e8e1b60e9d6a09cf2d86d"],["/2021/05/09/2021hmb/index.html","ef24f41137115999f7272489d4dd6113"],["/2021/05/17/fun-cyber-sec-1/index.html","782d6295ba376c580bbf251453ba48b7"],["/2021/05/23/2021gd-university-ctf/index.html","e62811439f7171d6ccc693b4ee7fe6c6"],["/2021/06/03/laravel8-debug-rce/index.html","bd5b603d427d5926fffabc7cd7adf57f"],["/2021/06/14/2021qwb/index.html","2e482822f2a6df35200c304b0bdbac0c"],["/404.html","bd24c5b5a42cf8dce4d0015964ed15ee"],["/about/index.html","4e859ae61d4d1fd736ca9e5f29ed936c"],["/archives/2019/06/index.html","6c04a0e274b93c609bda96166c6f106e"],["/archives/2019/07/index.html","ad17f7e4873ee7cc20ea586f7640e246"],["/archives/2019/07/page/2/index.html","ea3c24f5af1c2c006e79e64213779009"],["/archives/2019/08/index.html","decaf28dcaf5d0e840280ae2633db539"],["/archives/2019/09/index.html","b3a3aa48982717458680ee5b5c646c59"],["/archives/2019/10/index.html","0ac2ab85c064876287127fcb15fe8ce3"],["/archives/2019/11/index.html","0a455f5e4e9b395b1791df74931d61b2"],["/archives/2019/12/index.html","20d13a6318bb5b8273df3887db82efc7"],["/archives/2019/index.html","162ca3c48f1e8dd472d2e9b66f801938"],["/archives/2019/page/2/index.html","b241d39dadfdfe37f97ff04149cc6293"],["/archives/2019/page/3/index.html","d49ccc16d77ddf2398f770e5e13f1c7c"],["/archives/2019/page/4/index.html","f69254db900629cc4e0b596f0245e6f0"],["/archives/2020/01/index.html","08178de5d6dd5079c5d281f7688683d8"],["/archives/2020/index.html","92bf00b371827291be69d6e211748657"],["/archives/2021/04/index.html","f9ef01d9ca6f7e9ba3071436bf0e956f"],["/archives/2021/05/index.html","5d9f94f702f9add2ffd05dc4f4d0e111"],["/archives/2021/06/index.html","3d4e794a76127638a8530c9b9dce0e07"],["/archives/2021/index.html","c41fd7c65dbc3f1a463a6de634472a8e"],["/archives/2021/page/2/index.html","3149712da73edc318621e081d6ab6cb9"],["/archives/index.html","558538917ec1dedcb8efa7daf264af8c"],["/archives/page/2/index.html","558538917ec1dedcb8efa7daf264af8c"],["/archives/page/3/index.html","558538917ec1dedcb8efa7daf264af8c"],["/archives/page/4/index.html","558538917ec1dedcb8efa7daf264af8c"],["/archives/page/5/index.html","558538917ec1dedcb8efa7daf264af8c"],["/categories/SDL/index.html","d6d1da4f441d7a244bb56762a35a39a9"],["/categories/SDL/威胁建模/index.html","61a4d8cb3c51c6c8b4d048319701eead"],["/categories/ctf/ctfshow/ctf练习/index.html","3a7f3c65259754f9f9f899e4ad0c228b"],["/categories/ctf/ctfshow/index.html","fe69b07241ac8c3405573622192ee7de"],["/categories/ctf/hackme/ctf练习/index.html","215d5c28e05cb4811824a770c8f0cc95"],["/categories/ctf/hackme/index.html","a4b67b04ae8e80b5862aabc6e3bf696f"],["/categories/ctf/index.html","dbac73dd5b84b308835011399c55ceeb"],["/categories/ctf/page/2/index.html","463b7cbfbaa5c34c31d768eb4be645d3"],["/categories/ctf/入门/index.html","4bf028d7c9d083ef6209212f1d0f301c"],["/categories/ctf/比赛/index.html","ad62657a8c637a6d924b5d50a0a47025"],["/categories/勉強/index.html","547021031ab41cd8ca3df07c941bff26"],["/categories/学校课程/index.html","11fdd0c53860283d166f7cc0a8cda247"],["/categories/小记/index.html","6c1703079644f69f3053ace008306e57"],["/categories/开发/Python/Django/index.html","16b9a483b17fcb5ef895788a15455c96"],["/categories/开发/Python/index.html","624e64e054948382504970666f11bbb9"],["/categories/开发/Wordpress/index.html","7d10bf3361e84336953abbce2aea47ca"],["/categories/开发/index.html","8dce7e72bb89f0d7318a63bc9f32e976"],["/categories/总结/index.html","14fda072fe38031c31098da1ee23a101"],["/categories/总结/小记/index.html","03bd3fddd8c864f204453829a031c11e"],["/categories/日常折腾/Motrix/aria2/index.html","fd1ba3104eb62eaedce7e492be3ecb30"],["/categories/日常折腾/Motrix/index.html","388bf0a35b8d85151213070c87d6d4ea"],["/categories/日常折腾/index.html","0e00aa93ea06698e8b5942fea3a1334b"],["/categories/流量分析/Wireshark/MISC/index.html","3ce794fc5bb6085bd88e070817bca233"],["/categories/流量分析/Wireshark/index.html","343fe73c76f5993ff30f3d548627196c"],["/categories/流量分析/index.html","43681490d08be2603117164086d13caa"],["/categories/漏洞复现/ignition/Laravel8/index.html","8b4c418f3c2a53cb6809f95fa3f0f5de"],["/categories/漏洞复现/ignition/index.html","e8e175a36751dc0a4807a234164d2ef7"],["/categories/漏洞复现/index.html","37a2e42b73277336e612ba311bcaaa8b"],["/categories/运维/MySQL/index.html","8a33bbd02c03e917e9153da929a3befe"],["/categories/运维/Nginx/index.html","ab83d333efa49bbd12165cf6b93bc6f4"],["/categories/运维/PHP/index.html","5f2e23a20c08f2211d27ab9850a8bade"],["/categories/运维/SSH/index.html","34ff5d43db7fbd6e0c485145be62e6a3"],["/categories/运维/Wordpress/index.html","a34bf7dae2992261cf8e61217efae314"],["/categories/运维/ansible/index.html","e50c6c6e2349f7a6600ff0141a4d81ea"],["/categories/运维/index.html","d30074019841cb8be3b9baae3577f6e3"],["/categories/运维/page/2/index.html","caf93974320d33ae96c4dd1e53720657"],["/categories/运维/vsftpd/index.html","4bb06b002bfe3f9a6de8c142498e22bc"],["/categories/运维/备份/index.html","45f0bb1b5557afc879e9388739a20320"],["/categories/面白i安全小记/index.html","da5cc84a5be2d6d0e859cc305ea714fa"],["/css/first.css","9ed8ff385dd248cbb6c7535c5a287df1"],["/css/style.css","4b3029e397e31a29552681acd825e7a7"],["/friends/index.html","b5e31836a29dfda608e0b4191a01ddfc"],["/img/2021hfctf/image-20210403175010155.png","f14d1f253b517c66dccb25df01a81e4c"],["/img/2021hfctf/image-20210403175138664.png","f54b3618b2dde9c357fe2924ccee8fe6"],["/img/2021hfctf/image-20210403175307159.png","73cfec0eabc0e4c2d0bfa5849be1df15"],["/img/2021hfctf/image-20210403175851985.png","89133b246d565516bb66f49b3a60cd8c"],["/img/2021hfctf/image-20210403175931732.png","2ce8f7d275f0d052eb849f14ba3cab37"],["/img/2021hfctf/image-20210403180041983.png","5a1eacc81815f78eaf620ea30fc27f62"],["/img/2021hfctf/image-20210403180152159.png","77707796f5977c9b63ce2f1863ba5197"],["/img/2021hfctf/image-20210403180437548.png","6f23bd2ec2dec92ebe685f600a8d60a8"],["/img/2021hfctf/image-20210403180630972.png","882b6f1e133b18553a4ef792d7013238"],["/img/2021hfctf/image-20210403183838570.png","2a35566c073a0b3036ced4b900a09756"],["/img/2021hfctf/image-20210403184354702.png","50c75c1e68374a5ae738aefee864a94b"],["/img/2021hfctf/image-20210403185337497.png","4e889d42f7ad23c75506078eb0d6f116"],["/img/2021hfctf/image-20210403185407122.png","58518d00c30c65cc56cdc205bd1070c6"],["/img/2021hfctf/image-20210403185505318.png","7d0312562fd2c96a5bbebb724851a148"],["/img/2021hfctf/image-20210403190124297.png","4df57713e37e375a988dc2f6bd344e9c"],["/img/2021hfctf/image-20210403190259626.png","ab7fcad0db2cb73886475eda41b4738f"],["/img/2021hfctf/image-20210403190428006.png","1409395190f5427973e073f99f141553"],["/img/2021hfctf/image-20210403192049950.png","18fb1c82eaf5b158e3428b708e3284f6"],["/img/2021hfctf/image-20210403192514722.png","d7e47b157125463ad53a9e71cbd45b04"],["/img/2021hfctf/image-20210403192837797.png","9e0ad55cff9e0e642289d4b322c43da6"],["/img/2021hfctf/image-20210403193312651.png","cac1f70ccac2beadeba9d7135db2ca2f"],["/img/2021hfctf/image-20210403193452042.png","2395bb6bc8c038c65782db41636fcbfe"],["/img/2021hfctf/image-20210403193726603.png","8bd452fb37a5ab519ce17186bb41abf9"],["/img/2021hfctf/image-20210403193837506.png","94dcb5405f96fcdefaf0828c20cdaf15"],["/img/2021hfctf/image-20210403193944899.png","453a195ea3eae7521df63f5111c58d72"],["/img/2021hfctf/image-20210403194520727.png","c4d2c6d16ebade1f3a44afeebb99abd6"],["/img/2021hfctf/image-20210422145443361.png","065660f6aa452d7e3a688784ea755d4f"],["/img/2021hfctf/image-20210422152257725.png","87f10b2aa9226d68ec911db8717e037f"],["/img/2021hfctf/image-20210422153043013.png","1d81cb6b3c9da67b1c357e6bc2be7c33"],["/img/2021hfctf/image-20210422153724132.png","4a9384d7dbaf2b6a16ca91506bb12965"],["/img/2021hfctf/image-20210422160555844.png","8fe8fb7c3f29f557d92259901264a427"],["/img/2021hfctf/image-20210422185020091.png","c88d204fd9a61a8d8fbe318ee6c34d12"],["/img/2021hfctf/image-20210422185124957.png","19d5e22428a56cd26502b41924ff6dab"],["/img/2021hfctf/image-20210422185744001.png","d50512295b9e5fc13a8087414bf33412"],["/img/2021hfctf/image-20210422190049360.png","c57784b3fc4cf9d91fa4fba94292c85d"],["/img/2021hfctf/image-20210423150859893.png","4d82a01daf2b3ddbec2c44d3bafe0850"],["/img/2021hfctf/image-20210423151406429.png","777190c2ec4930584a5310b3189b1890"],["/img/2021hfctf/image-20210423151446165.png","4f5ebfeb435ac8905af6807696e068f7"],["/img/2021hfctf/image-20210423162419172.png","ac0d7fc5d9d68347464c52dea67279f8"],["/img/2021hfctf/image-20210423162810488.png","c00c4c279125e60f54a66ad6a788def1"],["/img/2021hfctf/image-20210424000231228.png","6fc3a5f671b851bfb4613bf26324394a"],["/img/2021hfctf/image-20210424120721588.png","4991f8aecbc15ec1b669c2d09a6816c1"],["/img/Linux_Server_Maintenance/firewall_nginx_err.png","a87f5e269cc7301687578d992914674c"],["/img/Linux_Server_Maintenance/mysqlForgetPass1.png","7918af6590c906691cb02364c41ab251"],["/img/Linux_Server_Maintenance/nfs_notice.png","36c2d73d79038c4cf8496e7a0282ed33"],["/img/Memo/django/django1.png","8167cbfe8b3052a99f5b30cecba97ca4"],["/img/Memo/django/django2.png","c494eaa626d7c00f045d8f4ce9f95b25"],["/img/Memo/django/django3.png","59289d144167493be6379dd01876a5b0"],["/img/Memo/django/django4.png","31568cdeed1ae44c3b9a4bd4e919d3de"],["/img/Memo/django/django5.png","0d9bfe16f27948555310bfab7e23448d"],["/img/Memo/django/django6.png","aea4ea0a4efc4bc45ea26909cbb58e09"],["/img/Memo/memo1.png","b47417aec94782e40929ffb513527d92"],["/img/ansible/tree_ansible_roles.png","6c564641000070b25f7e8d4838217972"],["/img/ctf/2019pico/1.png","93e6f0b33f85239e8085af92398e24c2"],["/img/ctf/2019qwb/广东名菜1002.png","cf31839ff615d5224e7abf82bf839292"],["/img/ctf/2019qwb/广东名菜1199.png","5c0be899e3bcef35939ff437f01f0054"],["/img/ctf/2019qwb/广东名菜1337.png","7e6b7700ef14229a93ec826677b01faf"],["/img/ctf/2019qwb/广东名菜1381.png","d1f4b624a6bbc588b3147c094b1f9288"],["/img/ctf/2019qwb/广东名菜1414.png","a5180451119dcdd917bc81c176bc84d2"],["/img/ctf/2019qwb/广东名菜1416.png","96e21da030d5f2614848b837270616e3"],["/img/ctf/2019qwb/广东名菜1426.png","750724320e8bb358639c5e60dd756d93"],["/img/ctf/2019qwb/广东名菜1479.png","980b082f309ddd4dfa83cf97d37efc4b"],["/img/ctf/2019qwb/广东名菜168.png","b3b0ddc89c81b366d94443d53aeb1bac"],["/img/ctf/2019qwb/广东名菜218.png","8731899dfe84ce545498b07df0e4d433"],["/img/ctf/2019qwb/广东名菜262.png","6587f2ceca2fa0d5ffc21ce333202204"],["/img/ctf/2019qwb/广东名菜264.png","0dcee3daef7cfa292df8454804aee7b5"],["/img/ctf/2019qwb/广东名菜383.png","c3960ee6198bbafd46ec2117875f919b"],["/img/ctf/2019qwb/广东名菜412.png","c5c33b0936c2daea6b49e0076bdcf70b"],["/img/ctf/2019qwb/广东名菜462.png","753e8a50182c76d8e67ebe12aeaa97aa"],["/img/ctf/2019qwb/广东名菜495.png","41b49e659d3606b753365036dc76bf8c"],["/img/ctf/2019qwb/广东名菜547.png","50bb6220ad5e5dca0f783eae97b160ab"],["/img/ctf/2019qwb/广东名菜595.png","9fc9678e67eacaab12c64e609d72d6c4"],["/img/ctf/2019qwb/广东名菜666.png","788f77ae0440d3aa57a1496e6a429b74"],["/img/ctf/2019qwb/广东名菜735.png","171cf36681aeb598b0b1c0ae72257d18"],["/img/ctf/2019qwb/广东名菜812.png","8eaa1037920c0a9ee1a52e9f0dcba736"],["/img/ctf/2019qwb/广东名菜867.png","de459d1aa727d6b69e5315c4f8af3bf2"],["/img/ctf/2019qwb/广东名菜910.png","2ec569d819b2bfb012fd10daf9924845"],["/img/fun-cyber-sec-1/image-20210518000346174.png","a07fca90deda45b51056edd616f6f7ee"],["/img/fun-cyber-sec-1/image-20210518000840645.png","efb33984329396c84fd3028ca28bb9d8"],["/img/laravel8-debug-rce/image-20210603153123337.png","aedbbef9d75815f90a1ad6c96b781932"],["/img/laravel8-debug-rce/image-20210603153756640.png","c70652974c0ad12de564c4101e0764fa"],["/img/laravel8-debug-rce/image-20210603153845580.png","e2c87e9a58172b347df1bf601163a875"],["/img/laravel8-debug-rce/image-20210603155331535.png","18bc9db11cef42d585ef60d4b8df170b"],["/img/laravel8-debug-rce/image-20210603155451064.png","45592bb7748a9239cba95a802b980498"],["/img/laravel8-debug-rce/image-20210603213316826.png","5adc4559be16a90b396c1befb2cffe7a"],["/img/laravel8-debug-rce/image-20210603222122634.png","4f22b1a20da715204c3580fc76be742b"],["/img/laravel8-debug-rce/image-20210604140216816.png","5aff757fb0085ae05bb19ab78c2e619e"],["/img/laravel8-debug-rce/image-20210604192821592.png","545908106f9547642f4ddb81c586d6aa"],["/img/laravel8-debug-rce/image-20210605104826605.png","fe980c42e44fd449b9b6ea35832fdc46"],["/img/laravel8-debug-rce/image-20210605144342722.png","e2265fa2d1dd5d60c1f6b6eb86893dc9"],["/img/laravel8-debug-rce/image-20210605151747374.png","824dd4f5b5be976a856d50001dbedbe4"],["/img/laravel8-debug-rce/image-20210605165008739.png","0595d2c6917104f19ed889d6bf955240"],["/img/laravel8-debug-rce/image-20210606092741651.png","14681c15c17290a9fef4e71b0b6196b6"],["/img/laravel8-debug-rce/image-20210606101905575.png","64b1e40d2117ad2b6541166018469454"],["/img/laravel8-debug-rce/image-20210606104747901.png","9ee4433c4b02d2ce58317a9f4aa264ea"],["/img/laravel8-debug-rce/image-20210606161844233.png","43cf6b3ceb67bcb60756b3f41fa9bea6"],["/img/laravel8-debug-rce/image-20210606162022551.png","9d04e2118efeb778ae71532069c119eb"],["/img/laravel8-debug-rce/image-20210606162114729.png","9d04e2118efeb778ae71532069c119eb"],["/img/laravel8-debug-rce/image-20210607110143247.png","728ea45c47ed51b6fbc4b0ee53368758"],["/img/laravel8-debug-rce/image-20210607112439248.png","026a08009b09460ef3ea03dc605dd4b7"],["/img/laravel8-debug-rce/image-20210607112920709.png","2c9224a136fdb0675757613a2e8f3a7a"],["/img/laravel8-debug-rce/image-20210607140820694.png","f13f4945c2ef5055bd32c730940ed457"],["/img/laravel8-debug-rce/image-20210607140842883.png","b1b8c7817440e58de15f31da23154366"],["/img/laravel8-debug-rce/image-20210607140919471.png","0a97b9149f0ba82813964e686ce9d56c"],["/img/laravel8-debug-rce/image-20210608092322607.png","e3bbef5f3c145c8520a3fc76eba2bcf9"],["/img/laravel8-debug-rce/image-20210608092359658.png","7ced2782394eba04305b392323960bd7"],["/img/laravel8-debug-rce/image-20210608092629402.png","7ac950dfb4db71ac5fce4ffceb8f185a"],["/img/laravel8-debug-rce/image-20210608092843302.png","b6dec032174f824814783c3f7a63e8f9"],["/img/laravel8-debug-rce/image-20210608094656287.png","0734efdb1653515640ed56aa3e173613"],["/img/laravel8-debug-rce/image-20210608094733672.png","dc1f4fb0248051c21cefe826b1436482"],["/img/laravel8-debug-rce/image-20210609000509235.png","971111d294ca519a4ddc1aec057a6727"],["/img/laravel8-debug-rce/image-20210609001508013.png","1def48391ad4e192bc63d29584f91c5f"],["/img/neutral/1.png","b38ef9ba19c9f00ae82dce9d8ff7908a"],["/img/neutral/2.png","609adb14197507b5f470b1c7a5d53387"],["/img/neutral/3.png","d81798cae86733309fbc30d1517dc11e"],["/img/neutral/4.png","3a8a4fcdd78400d62c93f36cb767bc37"],["/img/operating_system/computerArchitecture.png","964bd6df46bcaf12b489de048d5444ab"],["/img/operating_system/examplesOfMemoryManagementInOperatingSystems.png","e1c06012aa54b3925ccbd474baf9054d"],["/img/operating_system/memoryLayeringSystem.png","f57bd871281c5e9bdc5461bcd760a89e"],["/img/thread-modeling/administrative.png","bae8defb2d14af20b9cdd34699818386"],["/img/thread-modeling/critical.png","7dd1f9bf94cc5fd60a5db24a0485b2c4"],["/img/thread-modeling/data-flow50.png","11ff7b14192842111f02bc3dc5ea8c39"],["/img/thread-modeling/data-store50.png","81f4fd1cccdf78ae25fba3969ef50ec4"],["/img/thread-modeling/depthlayers.png","033d926004f8238f65cbfd4290318e68"],["/img/thread-modeling/external-entity50.png","09733c0ad32116aaf477c18fc286ff42"],["/img/thread-modeling/flow-trustboundary-7599331.png","fc1260a9f88ea97695a7a8a000091f4a"],["/img/thread-modeling/flow-trustboundary.png","fc1260a9f88ea97695a7a8a000091f4a"],["/img/thread-modeling/important.png","c9a68cd4b52c4f2a7d47157cadc220fc"],["/img/thread-modeling/information.png","9caef3a42291fe5b8bb3a08f4897e317"],["/img/thread-modeling/low.png","2f97352f51898a008081c42af6ef425c"],["/img/thread-modeling/moderate.png","deb3d37c3b318e5c6f9a4869dbe4ec3b"],["/img/thread-modeling/physical.png","c2160de3865e57b514aceb1d625af5d6"],["/img/thread-modeling/process-datastore.png","799089053d9f7c58d45b51728874736e"],["/img/thread-modeling/process-externalentity.png","ce3c8ec494e223c176d2e363c9d2c5cc"],["/img/thread-modeling/process-process.png","bfc464eda8c7e7745c4930176bb27221"],["/img/thread-modeling/process50.png","b17f3b455b4013508941ad9f8e0ef846"],["/img/thread-modeling/technical.png","519aaee9ef00835b22a62c0bf3d14774"],["/img/thread-modeling/threat-modeling-steps.png","492925d3493ac4769713d3b79a86112b"],["/img/thread-modeling/trust-boundary-box50.png","93a3efda901742984dc410cde593ca0e"],["/img/thread-modeling/trust-boundary-line50-7523817.png","66dfc8fc7aa6b42e676d881a2db4ba94"],["/img/thread-modeling/trust-boundary-line50-7523829.png","66dfc8fc7aa6b42e676d881a2db4ba94"],["/img/thread-modeling/trust-boundary-line50.png","66dfc8fc7aa6b42e676d881a2db4ba94"],["/img/xssrf/image-20210426104532271.png","9ecd78704cdeacd26db22a74dfbbd898"],["/img/xssrf/image-20210426105959581.png","ada8c7a7b35dc1a3f8bfad1e95088b75"],["/img/xssrf/image-20210426135624410.png","87f310a6df47bd2322a48b244eb397e7"],["/img/xssrf/image-20210426135720662.png","7a106b994b618c87bf4551563dfc607a"],["/img/xssrf/image-20210426140240792.png","c583a7086c257568d015d2597bc7f67f"],["/img/xssrf/image-20210426140353791.png","18edfc75ba98689d951264b009decafc"],["/img/xssrf/image-20210426140635038.png","c393f3c7e425f5e95562e8d3e0692702"],["/img/xssrf/image-20210426142206757.png","7359d499c1fcd229900798ea06d3a2a2"],["/img/xssrf/image-20210426144401815.png","4e41683b06d84a31b5ea96c17ff4e324"],["/img/xssrf/image-20210426145107589.png","3605937f96984f8319ee464bd86c5b8c"],["/img/xssrf/image-20210426145140680.png","a6293c551c981fc66e3b783e2668cd05"],["/img/xssrf/image-20210426153402679.png","b5df151225ed950bee0d1dc344cedc04"],["/img/手动分割线/image-20210401190333056.png","047e97575d093f477e3349b567ce5801"],["/index.html","35d5ae9a0263f9589d230315e75fe984"],["/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["/js/app.js","04596a7dc24b204061bd4fc766cc8e77"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/page/2/index.html","25acf46eecd23d0fe5ac6cd829bafe1b"],["/page/3/index.html","ffc479bb17f3820c32f24b68b40a1ba4"],["/page/4/index.html","58fae53c0de7b3395a6994b77a0e186f"],["/page/5/index.html","38b1940108659f2a71f6e75f69b531a0"],["/sw-register.js","1332c388487a44f3dba9ee5bc02ace16"],["/tags/Django/index.html","c31205a2a0936514adfc2595f1225cea"],["/tags/Laravel8/index.html","2648fc55ef27ec608eceea39ecf2be94"],["/tags/MISC/index.html","24a147e53705bb845f5761feeecc7810"],["/tags/Python/index.html","2e2c84448f43520338f5603a7153dde4"],["/tags/SDL/index.html","ac68fc13a64bdc27cd11c2b4ec649f84"],["/tags/Wireshark/index.html","eec10039973152187160cb7164fab379"],["/tags/Wordpress/index.html","bdaf455308d8ed48575a5b346041db8a"],["/tags/ctf/index.html","7f1f05a31f3fd7b1758d62d69a3e4ec1"],["/tags/ctf/page/2/index.html","747ac0fcf4c8d5785e48e7e3070960cd"],["/tags/ctfshow/index.html","229d9808877632592dabb877e4a2687e"],["/tags/ctf练习/index.html","9533dc0a2668ba418b09c81463f87266"],["/tags/hackme/index.html","bb5aba772a32ce1863199c67eb8843ec"],["/tags/ignition/index.html","0946025f902d59164b630a6ae6e76fcb"],["/tags/index.html","8476f63861c8155f4ddcad90441585e7"],["/tags/中国菜刀/index.html","baeb95653380e2e9ffc1b011461eeaf4"],["/tags/勉強/index.html","010c7636a1fcad3935cad6c5eaa12d4f"],["/tags/威胁建模/index.html","50975efdb2f72df82402c0f0670b2c15"],["/tags/小记/index.html","00c6533d9bdcf2088009ce503c772616"],["/tags/开发/index.html","9807d148e12668c61b1aec2b7d000421"],["/tags/总结/index.html","d612030fcc4718cecdb9c2d2fce1dbe9"],["/tags/日常折腾/index.html","c58e38c8417468cf9c9c5841011f9ff7"],["/tags/比赛/index.html","61940df8ab54e89c118d1461e8996f32"],["/tags/流量分析/index.html","2616aeab225630632cd03fbb98a5d66c"],["/tags/漏洞复现/index.html","c2cb2f9ea70084909733ae0d5f416911"],["/tags/运维/index.html","c90485586dd95000f234ab2ba75aaf80"],["/tags/运维/page/2/index.html","de33103d2b94eec8a0483c7f0e09f82a"],["/tags/面白i安全小记/index.html","2bb4d84a2eb1448d0e8b3a8eb8e51998"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });



// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache 配置转换后的 toolbox 代码.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.jsdelivr.net"});





/* eslint-enable */
