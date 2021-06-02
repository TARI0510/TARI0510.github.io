/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/06/23/hello-world/index.html","6b22ecaae6ba7e27f863cd0a155a583f"],["/2019/06/24/Openssh upgrade, from 7.5 to 7.9/index.html","f87f47f6ceac405dc2187f8aed3324cd"],["/2019/06/24/maintence/index.html","c0a9de4f431982dc417533271b8a7467"],["/2019/06/24/ゴーストルール/index.html","e8fe5512c84b30248c8ee43e1d5cb679"],["/2019/06/27/some_issue/index.html","bbb489c1554e0ffa8fe4f1288112bef6"],["/2019/06/29/「助詞」/index.html","667a65b69388165d641e508302590ce7"],["/2019/06/30/memo/index.html","cbfef1eb0b7d72ef4ada898059c377e7"],["/2019/07/01/Openssh_upgrade_from_7.5_to_8.0p1/index.html","a8f5944e954617bde59200fe9e737ebd"],["/2019/07/01/vsftpd_upgrade_from_2.2.2_to_3.0.3/index.html","d827ae137354418c5e7918704b6a6cda"],["/2019/07/02/「形容詞」/index.html","ebdcbbebe4a8d086f1dd909300521d69"],["/2019/07/03/MySQL_upgrade_from_5.5.*_to_5.7.*/index.html","2622bc09be8e4f3e1884be626bbbb3d8"],["/2019/07/03/PHP_upgrade_from_5.5.*_to_7.2.24/index.html","5c513cc7d53b938ae22af58799491e9b"],["/2019/07/06/ssh/index.html","70cdee17b4264ced9f2862d64a9cc37e"],["/2019/07/06/初识-ansible-1/index.html","090845fc2fa9b42a00cdfcdacbd31518"],["/2019/07/08/Motrix+aria2_踩坑/index.html","fddfdabfdc4ddfb9898c91c36a22595a"],["/2019/07/08/初识-ansible-2/index.html","9318cbb4c90d0b2b50793e349c41d7da"],["/2019/07/08/初识-ansible-3/index.html","18c89764112ee1d42bac9e72f9353bc6"],["/2019/07/09/CentOS7/index.html","c5246304f4040f391e581bafcf9fea6f"],["/2019/07/13/CentOS7-backup/index.html","870b8016c3b1e2fee746d48a0572cc2a"],["/2019/07/14/Install-OpenSSH8-0p1-from-source/index.html","031eced4f7fedd4eb088c55cd94c44c9"],["/2019/07/15/ansible-shell/index.html","aea1ee28bef2d46b1ea200a7aa254528"],["/2019/07/23/「量詞」/index.html","4fafd1078917af9d6cbe5ea3246e4979"],["/2019/07/28/Redundancy and load balancing/index.html","ec79f852659537343b0de1c9b7e5948e"],["/2019/08/26/wordpress后台登录加密/index.html","32709ba8faccce60afec2d1408472104"],["/2019/09/10/2019qwb/index.html","902c59f3dbfab867bc2aa5f6575ebb2e"],["/2019/09/23/wordpress_problem/index.html","eb9c81dafdacfa9ec80b50b3134d7d1e"],["/2019/10/04/计算智能入门/index.html","24b315c52dd1e6245a2e43f41c34146b"],["/2019/10/13/2019pico/index.html","824f70cfdf00e20266402a8d975cc586"],["/2019/10/17/2019hmb_guide/index.html","4a7503a5708ac45a99d341eef2e352fe"],["/2019/10/18/2019hmb/index.html","c71e8677c499c8011ab1202ceeab2270"],["/2019/11/18/乱七八糟/index.html","37b947950d04361b372d4f9c61b2f4e4"],["/2019/12/04/计算智能实验/index.html","5a756e527857a1f47f25acbe8d1166c3"],["/2020/01/02/django踩坑记/index.html","132a0f0c64e66287224f93fef9d14be8"],["/2021/04/01/Wireshark入门与实战/index.html","3cfeeb0ea8a1bb5160dae633a271cbb9"],["/2021/04/01/手动分割线/index.html","1d4de946811e36984ab18c510c232bbe"],["/2021/04/03/2021hfctf/index.html","095877c3a12961be520225c728e60893"],["/2021/04/04/thread-modeling/index.html","ceb070c78564488004090d95288f80d6"],["/2021/04/06/ctfshow-unserialize/index.html","48d7f0e3f7866514576b2805e4a68441"],["/2021/04/25/ctfshow-ssrf/index.html","2a03667824e9658f7257e4bad4b9ec4f"],["/2021/04/26/xssrf/index.html","7da031bffdd95a01e6461de5240ac7e2"],["/2021/05/04/ctfshow-nodejs/index.html","fc5a96fd49301253993adbb05bbcbe58"],["/2021/05/06/2021CSTC-ctf/index.html","a1e3650e4f3e8e1b60e9d6a09cf2d86d"],["/2021/05/09/2021hmb/index.html","93ed2b582049ef8cb7007b507a2d5ccd"],["/2021/05/17/fun-cyber-sec-1/index.html","782d6295ba376c580bbf251453ba48b7"],["/2021/05/23/2021gd-university-ctf/index.html","cba2d59a6982c211fe4660b736e5b6ef"],["/404.html","bd24c5b5a42cf8dce4d0015964ed15ee"],["/about/index.html","4e859ae61d4d1fd736ca9e5f29ed936c"],["/archives/2019/06/index.html","612b68fadb83443cb0dcda2d6473699d"],["/archives/2019/07/index.html","e79c635832b9c4946cc8248d3efd7174"],["/archives/2019/07/page/2/index.html","9ead8c76b960cf24efc622a4894bac2c"],["/archives/2019/08/index.html","2ad3a9e990d307860d196815d3bffc9b"],["/archives/2019/09/index.html","09326c6ec1320c378d50486134cc3a17"],["/archives/2019/10/index.html","65611b631de7b6d1f4bab3f29f9d971d"],["/archives/2019/11/index.html","8aad022a5e84ef229224cbbc621fec91"],["/archives/2019/12/index.html","627f4410c72a8cfc47bb23641ad7b285"],["/archives/2019/index.html","ad2e833e811f7aa35a4279ea7d77904d"],["/archives/2019/page/2/index.html","e509b47eb021b5224dfc1b33ef4cffb9"],["/archives/2019/page/3/index.html","81704003a017e2d12dd3a28dda05da76"],["/archives/2019/page/4/index.html","041ba6f084dbd6b378d38b87c522e393"],["/archives/2020/01/index.html","e825e456457e09f1e6d4976a968c9854"],["/archives/2020/index.html","33bae1c8be036dcf65abda268963275e"],["/archives/2021/04/index.html","111fb345d97f61eb5f3a37234fb81d5f"],["/archives/2021/05/index.html","707466e100b14aa5251409dc45f44c6f"],["/archives/2021/index.html","21ee190411839e8187f28bba18fa36fd"],["/archives/2021/page/2/index.html","a20a0eb194dc6e367eee1548d29b70ed"],["/archives/index.html","c3afc8068e05b12a86f90c5162876a8f"],["/archives/page/2/index.html","c3afc8068e05b12a86f90c5162876a8f"],["/archives/page/3/index.html","c3afc8068e05b12a86f90c5162876a8f"],["/archives/page/4/index.html","c3afc8068e05b12a86f90c5162876a8f"],["/archives/page/5/index.html","c3afc8068e05b12a86f90c5162876a8f"],["/categories/SDL/index.html","7a50c828f8406abc2708c826557d604f"],["/categories/SDL/威胁建模/index.html","3950e50d9230b42e369751b9241ce575"],["/categories/ctf/ctfshow/ctf练习/index.html","27f7fc5122039bd3cbdd99b18a7e4e63"],["/categories/ctf/ctfshow/index.html","1bf16d93ae5e757f6851ba10d1a1102d"],["/categories/ctf/hackme/ctf练习/index.html","a18036cd1d662ede3abefdaf98e716f9"],["/categories/ctf/hackme/index.html","b3e6fa4a325d80c19bf69475741e8ac1"],["/categories/ctf/index.html","b3badb0954c9e8c0a92290289eca7e63"],["/categories/ctf/page/2/index.html","b268775a494cfa419209c43dab1cb8c9"],["/categories/ctf/入门/index.html","1aef2733c25c863a28f1c7af9c6db0a6"],["/categories/ctf/比赛/index.html","b7d61c4b7a9bf4c00eea5070a8d901bc"],["/categories/勉強/index.html","9963870866db822301f775b2605c918c"],["/categories/学校课程/index.html","19e7a45c103efdbc87f538284aebeb80"],["/categories/小记/index.html","9d897a71d02f377433a1fe8c3092def8"],["/categories/开发/Python/Django/index.html","cd7c40e858ce56d00411e2618f873d4f"],["/categories/开发/Python/index.html","badae9324aef7732fcc05f991117d1d9"],["/categories/开发/Wordpress/index.html","c5715202e5cb49fcc8d7c75b5038e37c"],["/categories/开发/index.html","72355806172aa74c094b11b8862ee587"],["/categories/总结/index.html","9eb18a90407d3fa0027f8673b4f8be06"],["/categories/总结/小记/index.html","5c3454d6cfd039a9097fad5a1eff8a38"],["/categories/日常折腾/Motrix/aria2/index.html","d949d1faf14efabe68bfd58d4cb7f0ea"],["/categories/日常折腾/Motrix/index.html","02bf03c8c1a4a29b65cd75e69136331d"],["/categories/日常折腾/index.html","59bc7597c5b3d58307a0b1466a280774"],["/categories/流量分析/Wireshark/MISC/index.html","19c3021137f06a4a39c016701703f2c0"],["/categories/流量分析/Wireshark/index.html","39353905755108c2b28cd0848214c66a"],["/categories/流量分析/index.html","e29f1535874e903e14133f3fda23414e"],["/categories/运维/Nginx/index.html","c2ef86f19c4b10b2d36025a229ab4527"],["/categories/运维/SSH/index.html","aca86ba2afc203a3146546304acf6781"],["/categories/运维/Wordpress/index.html","0d84b31cb2753d953aca92a7f80943eb"],["/categories/运维/ansible/index.html","4059117bfeaa2f5682438d148b1cf9bc"],["/categories/运维/index.html","9ed89a86153ad02e74dfd15799af3168"],["/categories/运维/page/2/index.html","501655ce443ec7e82945417aee4db8b5"],["/categories/运维/vsftpd/index.html","884006a34916d78f5eebc4d87211350d"],["/categories/面白i安全小记/index.html","37326afb15d9d97d81bdaa14b93583e9"],["/css/first.css","9ed8ff385dd248cbb6c7535c5a287df1"],["/css/style.css","4b3029e397e31a29552681acd825e7a7"],["/friends/index.html","b5e31836a29dfda608e0b4191a01ddfc"],["/img/2021hfctf/image-20210403175010155.png","f14d1f253b517c66dccb25df01a81e4c"],["/img/2021hfctf/image-20210403175138664.png","f54b3618b2dde9c357fe2924ccee8fe6"],["/img/2021hfctf/image-20210403175307159.png","73cfec0eabc0e4c2d0bfa5849be1df15"],["/img/2021hfctf/image-20210403175851985.png","89133b246d565516bb66f49b3a60cd8c"],["/img/2021hfctf/image-20210403175931732.png","2ce8f7d275f0d052eb849f14ba3cab37"],["/img/2021hfctf/image-20210403180041983.png","5a1eacc81815f78eaf620ea30fc27f62"],["/img/2021hfctf/image-20210403180152159.png","77707796f5977c9b63ce2f1863ba5197"],["/img/2021hfctf/image-20210403180437548.png","6f23bd2ec2dec92ebe685f600a8d60a8"],["/img/2021hfctf/image-20210403180630972.png","882b6f1e133b18553a4ef792d7013238"],["/img/2021hfctf/image-20210403183838570.png","2a35566c073a0b3036ced4b900a09756"],["/img/2021hfctf/image-20210403184354702.png","50c75c1e68374a5ae738aefee864a94b"],["/img/2021hfctf/image-20210403185337497.png","4e889d42f7ad23c75506078eb0d6f116"],["/img/2021hfctf/image-20210403185407122.png","58518d00c30c65cc56cdc205bd1070c6"],["/img/2021hfctf/image-20210403185505318.png","7d0312562fd2c96a5bbebb724851a148"],["/img/2021hfctf/image-20210403190124297.png","4df57713e37e375a988dc2f6bd344e9c"],["/img/2021hfctf/image-20210403190259626.png","ab7fcad0db2cb73886475eda41b4738f"],["/img/2021hfctf/image-20210403190428006.png","1409395190f5427973e073f99f141553"],["/img/2021hfctf/image-20210403192049950.png","18fb1c82eaf5b158e3428b708e3284f6"],["/img/2021hfctf/image-20210403192514722.png","d7e47b157125463ad53a9e71cbd45b04"],["/img/2021hfctf/image-20210403192837797.png","9e0ad55cff9e0e642289d4b322c43da6"],["/img/2021hfctf/image-20210403193312651.png","cac1f70ccac2beadeba9d7135db2ca2f"],["/img/2021hfctf/image-20210403193452042.png","2395bb6bc8c038c65782db41636fcbfe"],["/img/2021hfctf/image-20210403193726603.png","8bd452fb37a5ab519ce17186bb41abf9"],["/img/2021hfctf/image-20210403193837506.png","94dcb5405f96fcdefaf0828c20cdaf15"],["/img/2021hfctf/image-20210403193944899.png","453a195ea3eae7521df63f5111c58d72"],["/img/2021hfctf/image-20210403194520727.png","c4d2c6d16ebade1f3a44afeebb99abd6"],["/img/2021hfctf/image-20210422145443361.png","065660f6aa452d7e3a688784ea755d4f"],["/img/2021hfctf/image-20210422152257725.png","87f10b2aa9226d68ec911db8717e037f"],["/img/2021hfctf/image-20210422153043013.png","1d81cb6b3c9da67b1c357e6bc2be7c33"],["/img/2021hfctf/image-20210422153724132.png","4a9384d7dbaf2b6a16ca91506bb12965"],["/img/2021hfctf/image-20210422160555844.png","8fe8fb7c3f29f557d92259901264a427"],["/img/2021hfctf/image-20210422185020091.png","c88d204fd9a61a8d8fbe318ee6c34d12"],["/img/2021hfctf/image-20210422185124957.png","19d5e22428a56cd26502b41924ff6dab"],["/img/2021hfctf/image-20210422185744001.png","d50512295b9e5fc13a8087414bf33412"],["/img/2021hfctf/image-20210422190049360.png","c57784b3fc4cf9d91fa4fba94292c85d"],["/img/2021hfctf/image-20210423150859893.png","4d82a01daf2b3ddbec2c44d3bafe0850"],["/img/2021hfctf/image-20210423151406429.png","777190c2ec4930584a5310b3189b1890"],["/img/2021hfctf/image-20210423151446165.png","4f5ebfeb435ac8905af6807696e068f7"],["/img/2021hfctf/image-20210423162419172.png","ac0d7fc5d9d68347464c52dea67279f8"],["/img/2021hfctf/image-20210423162810488.png","c00c4c279125e60f54a66ad6a788def1"],["/img/2021hfctf/image-20210424000231228.png","6fc3a5f671b851bfb4613bf26324394a"],["/img/2021hfctf/image-20210424120721588.png","4991f8aecbc15ec1b669c2d09a6816c1"],["/img/Linux_Server_Maintenance/firewall_nginx_err.png","a87f5e269cc7301687578d992914674c"],["/img/Linux_Server_Maintenance/mysqlForgetPass1.png","7918af6590c906691cb02364c41ab251"],["/img/Linux_Server_Maintenance/nfs_notice.png","36c2d73d79038c4cf8496e7a0282ed33"],["/img/Memo/django/django1.png","8167cbfe8b3052a99f5b30cecba97ca4"],["/img/Memo/django/django2.png","c494eaa626d7c00f045d8f4ce9f95b25"],["/img/Memo/django/django3.png","59289d144167493be6379dd01876a5b0"],["/img/Memo/django/django4.png","31568cdeed1ae44c3b9a4bd4e919d3de"],["/img/Memo/django/django5.png","0d9bfe16f27948555310bfab7e23448d"],["/img/Memo/django/django6.png","aea4ea0a4efc4bc45ea26909cbb58e09"],["/img/Memo/memo1.png","b47417aec94782e40929ffb513527d92"],["/img/ansible/tree_ansible_roles.png","6c564641000070b25f7e8d4838217972"],["/img/ctf/2019pico/1.png","93e6f0b33f85239e8085af92398e24c2"],["/img/ctf/2019qwb/广东名菜1002.png","cf31839ff615d5224e7abf82bf839292"],["/img/ctf/2019qwb/广东名菜1199.png","5c0be899e3bcef35939ff437f01f0054"],["/img/ctf/2019qwb/广东名菜1337.png","7e6b7700ef14229a93ec826677b01faf"],["/img/ctf/2019qwb/广东名菜1381.png","d1f4b624a6bbc588b3147c094b1f9288"],["/img/ctf/2019qwb/广东名菜1414.png","a5180451119dcdd917bc81c176bc84d2"],["/img/ctf/2019qwb/广东名菜1416.png","96e21da030d5f2614848b837270616e3"],["/img/ctf/2019qwb/广东名菜1426.png","750724320e8bb358639c5e60dd756d93"],["/img/ctf/2019qwb/广东名菜1479.png","980b082f309ddd4dfa83cf97d37efc4b"],["/img/ctf/2019qwb/广东名菜168.png","b3b0ddc89c81b366d94443d53aeb1bac"],["/img/ctf/2019qwb/广东名菜218.png","8731899dfe84ce545498b07df0e4d433"],["/img/ctf/2019qwb/广东名菜262.png","6587f2ceca2fa0d5ffc21ce333202204"],["/img/ctf/2019qwb/广东名菜264.png","0dcee3daef7cfa292df8454804aee7b5"],["/img/ctf/2019qwb/广东名菜383.png","c3960ee6198bbafd46ec2117875f919b"],["/img/ctf/2019qwb/广东名菜412.png","c5c33b0936c2daea6b49e0076bdcf70b"],["/img/ctf/2019qwb/广东名菜462.png","753e8a50182c76d8e67ebe12aeaa97aa"],["/img/ctf/2019qwb/广东名菜495.png","41b49e659d3606b753365036dc76bf8c"],["/img/ctf/2019qwb/广东名菜547.png","50bb6220ad5e5dca0f783eae97b160ab"],["/img/ctf/2019qwb/广东名菜595.png","9fc9678e67eacaab12c64e609d72d6c4"],["/img/ctf/2019qwb/广东名菜666.png","788f77ae0440d3aa57a1496e6a429b74"],["/img/ctf/2019qwb/广东名菜735.png","171cf36681aeb598b0b1c0ae72257d18"],["/img/ctf/2019qwb/广东名菜812.png","8eaa1037920c0a9ee1a52e9f0dcba736"],["/img/ctf/2019qwb/广东名菜867.png","de459d1aa727d6b69e5315c4f8af3bf2"],["/img/ctf/2019qwb/广东名菜910.png","2ec569d819b2bfb012fd10daf9924845"],["/img/fun-cyber-sec-1/image-20210518000346174.png","a07fca90deda45b51056edd616f6f7ee"],["/img/fun-cyber-sec-1/image-20210518000840645.png","efb33984329396c84fd3028ca28bb9d8"],["/img/neutral/1.png","b38ef9ba19c9f00ae82dce9d8ff7908a"],["/img/neutral/2.png","609adb14197507b5f470b1c7a5d53387"],["/img/neutral/3.png","d81798cae86733309fbc30d1517dc11e"],["/img/neutral/4.png","3a8a4fcdd78400d62c93f36cb767bc37"],["/img/operating_system/computerArchitecture.png","964bd6df46bcaf12b489de048d5444ab"],["/img/operating_system/examplesOfMemoryManagementInOperatingSystems.png","e1c06012aa54b3925ccbd474baf9054d"],["/img/operating_system/memoryLayeringSystem.png","f57bd871281c5e9bdc5461bcd760a89e"],["/img/thread-modeling/administrative.png","bae8defb2d14af20b9cdd34699818386"],["/img/thread-modeling/critical.png","7dd1f9bf94cc5fd60a5db24a0485b2c4"],["/img/thread-modeling/data-flow50.png","11ff7b14192842111f02bc3dc5ea8c39"],["/img/thread-modeling/data-store50.png","81f4fd1cccdf78ae25fba3969ef50ec4"],["/img/thread-modeling/depthlayers.png","033d926004f8238f65cbfd4290318e68"],["/img/thread-modeling/external-entity50.png","09733c0ad32116aaf477c18fc286ff42"],["/img/thread-modeling/flow-trustboundary-7599331.png","fc1260a9f88ea97695a7a8a000091f4a"],["/img/thread-modeling/flow-trustboundary.png","fc1260a9f88ea97695a7a8a000091f4a"],["/img/thread-modeling/important.png","c9a68cd4b52c4f2a7d47157cadc220fc"],["/img/thread-modeling/information.png","9caef3a42291fe5b8bb3a08f4897e317"],["/img/thread-modeling/low.png","2f97352f51898a008081c42af6ef425c"],["/img/thread-modeling/moderate.png","deb3d37c3b318e5c6f9a4869dbe4ec3b"],["/img/thread-modeling/physical.png","c2160de3865e57b514aceb1d625af5d6"],["/img/thread-modeling/process-datastore.png","799089053d9f7c58d45b51728874736e"],["/img/thread-modeling/process-externalentity.png","ce3c8ec494e223c176d2e363c9d2c5cc"],["/img/thread-modeling/process-process.png","bfc464eda8c7e7745c4930176bb27221"],["/img/thread-modeling/process50.png","b17f3b455b4013508941ad9f8e0ef846"],["/img/thread-modeling/technical.png","519aaee9ef00835b22a62c0bf3d14774"],["/img/thread-modeling/threat-modeling-steps.png","492925d3493ac4769713d3b79a86112b"],["/img/thread-modeling/trust-boundary-box50.png","93a3efda901742984dc410cde593ca0e"],["/img/thread-modeling/trust-boundary-line50-7523817.png","66dfc8fc7aa6b42e676d881a2db4ba94"],["/img/thread-modeling/trust-boundary-line50-7523829.png","66dfc8fc7aa6b42e676d881a2db4ba94"],["/img/thread-modeling/trust-boundary-line50.png","66dfc8fc7aa6b42e676d881a2db4ba94"],["/img/xssrf/image-20210426104532271.png","9ecd78704cdeacd26db22a74dfbbd898"],["/img/xssrf/image-20210426105959581.png","ada8c7a7b35dc1a3f8bfad1e95088b75"],["/img/xssrf/image-20210426135624410.png","87f310a6df47bd2322a48b244eb397e7"],["/img/xssrf/image-20210426135720662.png","7a106b994b618c87bf4551563dfc607a"],["/img/xssrf/image-20210426140240792.png","c583a7086c257568d015d2597bc7f67f"],["/img/xssrf/image-20210426140353791.png","18edfc75ba98689d951264b009decafc"],["/img/xssrf/image-20210426140635038.png","c393f3c7e425f5e95562e8d3e0692702"],["/img/xssrf/image-20210426142206757.png","7359d499c1fcd229900798ea06d3a2a2"],["/img/xssrf/image-20210426144401815.png","4e41683b06d84a31b5ea96c17ff4e324"],["/img/xssrf/image-20210426145107589.png","3605937f96984f8319ee464bd86c5b8c"],["/img/xssrf/image-20210426145140680.png","a6293c551c981fc66e3b783e2668cd05"],["/img/xssrf/image-20210426153402679.png","b5df151225ed950bee0d1dc344cedc04"],["/img/手动分割线/image-20210401190333056.png","047e97575d093f477e3349b567ce5801"],["/index.html","6fa12d6485368f40d4f053f5c60b06b0"],["/js/aplayer.js","0256a926f30b74f07457e05f236adec2"],["/js/app.js","04596a7dc24b204061bd4fc766cc8e77"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/page/2/index.html","60792833405949efb11f19f1ba9fd46d"],["/page/3/index.html","cee5ecf3e732d254a6922d63d8ea6173"],["/page/4/index.html","da9e22d680aee2fc86a86552ffde29a4"],["/page/5/index.html","ca98150cd868392ecfe31766181b070d"],["/sw-register.js","463fab4d592e47e62b3a8d93aecd5bec"],["/tags/Django/index.html","6f4e6074bdf588cc3c9366285bc76f58"],["/tags/MISC/index.html","dcc24178f5445298087da7401887691d"],["/tags/Motrix/index.html","8af59c51313aa5d4688454a160a9a3f8"],["/tags/Nginx/index.html","17892c823ec2a613b479d4f258c0f437"],["/tags/Python/index.html","11ff2af8dac508a586e25e17929049b9"],["/tags/SDL/index.html","0c58645de487aefda5795af483908415"],["/tags/SSH/index.html","947365a3b36c77051d5496564f358c6e"],["/tags/Wireshark/index.html","608f001eb65bf74ef4ae2018aacfc032"],["/tags/Wordpress/index.html","95715d7d74ed2edf66f5a7cf22a9fa4a"],["/tags/ansible/index.html","f46f1b00160a68ec4ec4fb37ca39f75b"],["/tags/aria2/index.html","674e3999ae08caed5a8ec24a67473551"],["/tags/ctf/index.html","4f64b7ac2c256f6ba8ddf2a112b4c2d4"],["/tags/ctf/page/2/index.html","e41661b309103c57fa58d97d60e1deb1"],["/tags/ctfshow/index.html","35786161ca9d19ff32c2765e57faad10"],["/tags/ctf练习/index.html","bb7373abf94895e6f1e2fb42525f5cfb"],["/tags/hackme/index.html","70eab20442177ef59f0202b4830f9b9d"],["/tags/index.html","0c58e79914dc81cdb86f8f40ba9260ff"],["/tags/vsftpd/index.html","bcbe24de8f87e6d8693213b2182ce355"],["/tags/中国菜刀/index.html","b8ff81748873d7c82ccd8c48bc94d932"],["/tags/入门/index.html","7b4c07c1091b1ee14ffdcccf1e9c9c83"],["/tags/勉強/index.html","fc1806d70c091f31c95d93e8514b18b2"],["/tags/威胁建模/index.html","27472cc04d03270e03c4cd860402c99c"],["/tags/学校课程/index.html","e61591fdf7a0497ec719f300769e9932"],["/tags/小记/index.html","b9cf2d2a05140e2ed61239bb48172686"],["/tags/开发/index.html","7a6addf6e3c115f37aba079cebbe81dd"],["/tags/总结/index.html","f85e62aa107da0c73132eb9b9ee9a7f3"],["/tags/日常折腾/index.html","9d5b8851d945d1e1fa22e9635effa927"],["/tags/比赛/index.html","bbef2bd8c396a27e33aa0ddc481d9df8"],["/tags/流量分析/index.html","1969acf98fe885979d0a9ac058e533c7"],["/tags/运维/index.html","aec120bb83b98d5d934493f32c0788f5"],["/tags/运维/page/2/index.html","3c10f1abb0121205b1ff95493df3b53d"],["/tags/面白i安全小记/index.html","c8015d4eeda0af677fe284546bbbb7c7"]];
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
