import useFetchProtectedData from "../hooks/useFetchProtectedData";
import Loader from "../components/Loader";
import Sidebar from "../components/Sidebar";
import SpeedDialComp from "../components/SpeedDial";

const Dashboard = () => {
    const apiDomain = process.env.REACT_APP_API_DOMAIN;

    const { data, loading, error } = useFetchProtectedData(`${apiDomain}api/auth/user/`);

    return ( 
        <div>
            { loading && <Loader text="Please wait... We're setting up your dashboard." /> }
            { error && <p>{ error }</p> }
            { data && (
                <div className="dashboard bg-slate-100 min-h-screen">
                    <Sidebar />
                    <div className="bg-slate-100 sticky top-0 lg:hidden">
                        <div className="text-2xl ml-[4rem] font-semibold py-3">Plated</div>
                    </div>
                    <div className="lg:ml-[20rem] h-full lg:px-0 px-4">
                        <div className="text-2xl font-semibold lg:pt-5 lg:pb-2 pb-1">Welcome {data.is_first_login ? "to Plated" : "back"}, {data.username}!</div>
                        <div>d doloribus eaque eos excepturi id a voluptatum natus ipsum voluptatem natus ipsum voluptatemnatus ipsum voluptatem et repellendus quo, provident recusandae ipsam quisquam?</div>
                        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ipsum inventore quia nobis impedit necessitatibus ex vel tempore laboriosam autem rem, dolorum, consequatur optio eligendi dignissimos placeat repellat. Magnam, unde.
                        Ut voluptates eligendi quas fuga animi maiores perferendis alias beatae magni nihil consectetur veniam ipsam ab doloremque error a porro, ducimus rem praesentium dicta mollitia in? Asperiores enim nisi provident.
                        Beatae porro sed iure perspiciatis error ipsa neque ducimus obcaecati vitae dolorum? Expedita, excepturi a inventore molestias voluptates dolorem officiis recusandae soluta numquam aperiam ratione, dolores debitis laudantium tempore nam.
                        At consequuntur quod, error vitae adipisci tempora voluptatum, explicabo officia aspernatur, id quasi sed laudantium quisquam obcaecati totam eveniet porro accusantium neque! Accusamus, quis! Voluptatibus neque voluptates corrupti ipsa adipisci?
                        Beatae expedita laudantium, ducimus sequi sapiente provident impedit doloremque accusamus? Cumque nobis accusantium nesciunt sint incidunt ipsa facere, soluta ea accusamus eligendi, laboriosam eum aspernatur mollitia obcaecati dicta eaque fuga.
                        Ex doloremque, reiciendis vel rem error aliquid nostrum minima cum quae quis modi labore, omnis non illum hic laboriosam neque ducimus dolore veniam deleniti nisi suscipit laudantium consequatur. Inventore, laboriosam?
                        Illo deserunt reprehenderit voluptatum doloremque est voluptates provident pariatur vel, excepturi voluptas maiores laudantium alias eos dicta obcaecati at nostrum ducimus eaque quibusdam? Reiciendis illo autem molestias porro aliquam. Expedita.
                        At, blanditiis? Cumque fugit praesentium pariatur similique quae impedit quis a natus optio facilis, enim quos est nostrum, perferendis laudantium temporibus aliquid corrupti nam minus, et laboriosam exercitationem! Veritatis, omnis!
                        Animi, aliquid! Ut adipisci sequi reiciendis, error illo vel distinctio vero eaque quam dolore a incidunt veniam consectetur, fugiat, non quae inventore fugit delectus aperiam? Dolorem illum odit aliquam voluptates?
                        Consequatur doloremque soluta fugiat. Officia minus voluptate totam, maiores dignissimos accusantium! Omnis perferendis error eaque vel labore. Natus fugiat quae eos quas, impedit, aspernatur ad cumque architecto enim praesentium maxime?
                        Illum vitae tenetur praesentium eum quam cum obcaecati inventore doloribus quibusdam corrupti maxime quae illo suscipit dicta perferendis itaque repudiandae fugiat voluptatem magni, maiores pariatur tempora. Suscipit quibusdam eveniet et!
                        Voluptate aliquam, dolorem culpa maiores vel, autem iure eum laborum ipsum porro unde, perspiciatis rerum totam nulla quibusdam sapiente at delectus! Praesentium autem maiores unde tempora laboriosam ad libero! Eaque?
                        Deleniti odio nobis recusandae possimus sed eligendi quod officiis repudiandae ratione nemo ducimus, tempora sint expedita voluptate! Nihil, ab soluta ipsum quod, numquam similique libero, aliquam impedit earum explicabo fugiat.
                        Enim fugiat assumenda id laborum accusantium, illo aspernatur beatae quod aut deserunt autem. Optio aut iure expedita, laudantium sit corporis ratione officiis, debitis maiores modi recusandae officia voluptatem odio libero.
                        Praesentium, hic? Ducimus sequi expedita id nulla! A nesciunt numquam atque! Inventore, veritatis. Cumque inventore nesciunt voluptatibus qui corporis est eius non quia ratione! Architecto iure est officia natus animi?
                        Temporibus in odio, quasi voluptates aut modi voluptatem consectetur fugit maiores quas inventore, exercitationem sit facilis iusto voluptas delectus obcaecati accusamus similique maxime vero at, ullam ratione reprehenderit! Sed, esse?
                        Ipsam tenetur ipsa natus veritatis aspernatur magnam inventore corrupti quod delectus, incidunt explicabo pariatur ratione laborum eaque amet dignissimos odio dolore voluptas? Sit, obcaecati quis. Magni aspernatur quod soluta quae!
                        Dolore, doloremque quisquam expedita aut suscipit consectetur nulla molestiae nemo. Voluptas nemo id odio eaque saepe quaerat, veniam beatae ipsum quis est delectus officiis deleniti maiores et. Exercitationem, eius earum.
                        Exercitationem doloribus perferendis, ratione illum dolorum consectetur laboriosam quia blanditiis laborum eius dicta aliquid vero cumque obcaecati repudiandae explicabo perspiciatis, reprehenderit aut quisquam aspernatur impedit, incidunt rerum excepturi cupiditate? Consequatur.
                        Dolor cupiditate, possimus pariatur repellat vero culpa suscipit, incidunt nulla voluptate nobis praesentium, deleniti voluptatum! Dolorem adipisci aliquid repellendus nam odio, aperiam iusto placeat mollitia fugiat facere doloribus ex non!
                        Assumenda eos unde, quibusdam corporis iure cupiditate nam iusto harum dolore. Molestiae voluptatum, illum eligendi vero explicabo officiis quaerat facilis nisi animi iusto voluptatibus aliquam officia doloremque fugit quia ullam!
                        Laboriosam qui architecto facilis dolorum ipsum cupiditate officiis sapiente, corrupti repudiandae obcaecati repellat totam impedit sunt rem suscipit. Similique placeat repudiandae officiis ducimus rerum dicta odit eius quod asperiores ipsum!
                        Quod unde illum, officia quis, dignissimos labore, itaque adipisci quas temporibus maxime earum at? Nemo, aliquid. Nisi non, esse nam veniam aliquid aperiam porro maiores, eius, eum corporis sunt suscipit!
                        Dolore, reiciendis soluta inventore dolorem officia fuga quaerat hic atque nulla, corrupti consectetur labore eos voluptate iure nesciunt commodi, veritatis eius omnis quidem deleniti eaque qui aliquid. Deleniti, laborum mollitia.
                        Beatae numquam qui omnis doloribus quae unde in aut incidunt accusamus, quas consequatur iure vero placeat totam labore similique minima voluptate ullam. Asperiores quas et quae laudantium nihil alias fuga?
                        Dolorum ratione vero aliquam adipisci. Animi quod dignissimos nesciunt ducimus cum sint officia delectus a assumenda, soluta amet fugit illo quos totam itaque maxime est nostrum atque id, vel adipisci!
                        Excepturi provident ad inventore harum cupiditate tenetur id quis expedita hic modi, dolores autem minus et labore incidunt quo, quisquam consequatur officiis fugit suscipit odit quae fuga nemo totam. Magni.
                        Minima neque qui nisi accusantium, repudiandae dolorem omnis distinctio ut officiis? Reprehenderit sunt eligendi laboriosam, repellat reiciendis aspernatur placeat. Pariatur mollitia quaerat a voluptatum? Animi dolore voluptas magnam officiis ex.
                        Facere dolorum laudantium exercitationem eligendi quis maxime. Aliquam dignissimos placeat ullam reiciendis aspernatur alias asperiores, non eveniet pariatur eum ea praesentium voluptas quaerat eos, modi suscipit autem maxime id eius.
                        Eveniet dolore, quae odit placeat ducimus accusamus qui suscipit maiores distinctio nesciunt cum, rem id, sunt iste recusandae soluta blanditiis corrupti quasi debitis eum. Repellat nihil aperiam ipsum illo facilis.
                        Unde, eos delectus voluptatem dignissimos amet ad harum magnam laboriosam non repellat deserunt excepturi obcaecati quibusdam reiciendis ipsam id ut commodi? Nesciunt itaque officia mollitia ex laudantium cumque totam ipsam?
                        Ullam dolor reprehenderit nemo beatae dolore molestiae facilis. Ea laudantium facere nemo ullam animi ex. Quasi nam facilis totam voluptate earum dolorum qui tenetur nisi magnam, quo adipisci, vero repudiandae.
                        Amet maiores, deleniti fugiat neque minus debitis laborum quo culpa nihil officiis optio cum nostrum fuga, maxime inventore distinctio eos quaerat? Laudantium sequi illo deleniti ratione fuga quia rerum placeat!
                        Quasi veniam sit incidunt quos natus sint repudiandae saepe error, similique dolor neque quae impedit laboriosam sunt ullam sequi eaque asperiores velit laudantium! Vel doloribus et quibusdam veritatis, similique maiores.
                        Nihil praesentium totam soluta, corporis dolorem nesciunt repudiandae doloremque repellat maiores voluptates esse sequi dolorum iusto, vel commodi quidem iure! Totam facere voluptatum illum saepe sapiente eveniet cupiditate tempora id!
                        Facere nesciunt excepturi deleniti, iure commodi consequuntur fugit odio eius dolor quidem, cum quos velit fugiat debitis laudantium! Perferendis non ipsa voluptates sunt ab magni provident sed quasi consequuntur excepturi.
                        Maxime minus adipisci quasi excepturi ducimus, temporibus exercitationem odio molestiae eaque et, porro sit architecto, consequatur quidem autem. Laudantium voluptatem amet ex libero optio perspiciatis. Ad facilis consectetur obcaecati nemo!
                        Tempora cum commodi qui magni laborum voluptatem unde aspernatur, quaerat sint facilis ab voluptas sed assumenda beatae accusantium soluta quia error incidunt veritatis! Minima quod distinctio architecto nam dicta excepturi.
                        Quas officia consequuntur voluptatem illum, molestias et saepe veniam, nesciunt recusandae fugit eveniet. Maiores saepe doloribus illo! Voluptatibus dolore, sit saepe nihil facere fugiat et vel esse eius animi nulla.
                        Officia possimus deserunt quisquam consequuntur hic. Accusantium amet suscipit esse! Dicta corrupti minima dolore iusto facere totam esse suscipit eaque? Quod odio animi quos vero recusandae quam sequi eos qui?
                        Nostrum nam velit dicta eos, quasi deserunt sunt voluptatum magnam recusandae tempora quia omnis rem autem in, minus ipsam aliquid ad architecto repellat. Id provident adipisci maxime deserunt dolore nisi!
                        Facere, necessitatibus omnis dignissimos provident molestias accusamus reiciendis officia libero incidunt reprehenderit assumenda debitis, velit minima sunt nemo fugit dolorum laborum laudantium voluptatibus mollitia qui ipsa porro dicta! Ullam, sequi?
                        Quisquam odio asperiores laboriosam quibusdam molestias, nemo veritatis. Hic velit, earum dicta architecto laudantium adipisci aperiam, natus rerum quas, eligendi perspiciatis ullam consequatur debitis blanditiis cupiditate odit ipsam fugit esse.
                        Quibusdam totam rerum eaque quam eum atque iste eligendi nostrum similique, rem temporibus dolorum eveniet at, praesentium iusto? Sapiente provident soluta similique? Expedita temporibus aut aspernatur similique ipsum, placeat eligendi!
                        Porro voluptatibus minus distinctio! Nulla soluta rerum commodi dicta quo officia ab. Praesentium deleniti dolores consequuntur et rem voluptatem consequatur quam sed consectetur, aperiam totam nulla assumenda iure veniam delectus.
                        Reprehenderit, repudiandae quod numquam maxime nihil nam, libero corporis culpa esse hic magnam deleniti! Atque modi, provident ea recusandae at perferendis ab iure, sunt sequi nulla nobis quam fugit repudiandae?
                        Quae, molestias! Facere eligendi omnis soluta minima quae a at quaerat totam, non exercitationem iure error harum corrupti iusto enim et explicabo esse qui ex sapiente quos aliquam? At, ullam!
                        Illo, impedit doloribus? Necessitatibus, nobis. Aperiam fugiat reiciendis atque possimus eligendi, veritatis et iste autem fuga impedit aspernatur, natus nihil! Illo non dolorem aspernatur consequatur ad, dicta minus reiciendis voluptates!
                        Debitis fuga optio magnam. Velit odit praesentium, dignissimos autem earum a veritatis tempora reiciendis nam aut illo obcaecati fuga voluptatum possimus porro assumenda vero, omnis corrupti optio commodi eligendi magnam.
                        Temporibus, rem? Asperiores iure laudantium, quidem aliquid ut eius cumque voluptatem impedit molestiae, necessitatibus quasi exercitationem ad, cum accusamus neque quod! Ipsam ab temporibus facilis perspiciatis repudiandae sapiente possimus totam.
                        Corrupti sapiente quae nam, non ipsa molestiae facere suscipit, cumque dicta voluptates, ducimus laboriosam labore dolores amet qui iusto quia! Facere laboriosam veritatis voluptatum, dicta impedit officia porro deserunt fuga.
                        Dignissimos, eaque molestias. Repellat, quam ea repellendus veritatis corporis rerum aut laboriosam incidunt fugit inventore laborum, at eum hic voluptates eaque tenetur alias sequi! Aliquid dolore impedit sed aliquam vel.
                        Aspernatur aliquid voluptates voluptas ab perspiciatis, saepe tenetur, molestiae quaerat optio, accusamus recusandae? Eveniet ipsam aut veniam esse culpa, vero quis officia doloremque eos, fugiat corporis quisquam. Totam, ipsa libero.
                        Corrupti mollitia distinctio doloremque possimus molestiae commodi cupiditate laborum, eius assumenda velit dignissimos fuga iste quas magnam. Repellat laborum modi eligendi maiores numquam eum magnam iste unde tempore. Ut, corporis?
                        Aliquam repellendus consequatur fuga in veniam veritatis quod voluptas ab dignissimos doloremque. Molestiae rem est nemo tempore! Quos iure placeat voluptatibus esse mollitia quidem officiis. Voluptatibus alias repudiandae magnam delectus.
                        Minus, quo reiciendis? Similique distinctio repudiandae recusandae, quia ea rerum aspernatur! Quo aliquid ab voluptate quibusdam, molestiae expedita deleniti rem, atque autem, accusamus excepturi a ipsa quos veniam officiis suscipit!
                        Doloribus nobis distinctio nemo exercitationem odit pariatur est porro vel voluptatem explicabo nihil consequuntur architecto neque aliquid quo similique laborum, quas obcaecati expedita veniam nam unde voluptas iste. Harum, facilis?
                        Officia, vitae commodi nulla velit ducimus alias. Architecto quos in assumenda, ratione inventore soluta exercitationem dolorem molestias at voluptas illo deserunt itaque amet quo? Vitae, sit. Aliquid modi culpa sequi.
                        Velit aperiam rerum sint. Et, labore incidunt rem suscipit molestiae ullam earum dolore numquam asperiores soluta nesciunt sunt aut officiis, tempora voluptate quas, accusantium nobis eum quaerat placeat facere minus!
                        A officia neque et quaerat repudiandae, voluptatibus dolores, aut autem repellendus suscipit facere, deleniti ducimus quod vero dolore dolorem! Qui necessitatibus dignissimos ducimus enim aliquid vero ipsum temporibus voluptates officia?
                        Natus esse vero, aliquam ab blanditiis temporibus, dignissimos laboriosam incidunt suscipit, maiores necessitatibus ut! Perspiciatis quae soluta ex culpa repudiandae eos ab expedita, optio sit, aspernatur incidunt accusamus velit repellat.
                        Magni quidem ipsam, fugiat architecto nesciunt amet commodi magnam dolore velit illum consequatur est distinctio porro autem dolorem sit excepturi, at culpa doloribus veritatis quae. Quam ad earum doloribus laborum!
                        Eos, quam culpa. Sit illo nobis consequuntur cum impedit cumque numquam est veritatis laudantium iste sed earum esse, soluta ex! Eveniet mollitia nisi a alias hic optio magnam molestiae voluptatum.
                        Praesentium officia voluptas magnam, esse, nam, ab modi quas error aliquid quaerat explicabo. Quibusdam quo quisquam facere eum ipsa voluptas ad excepturi voluptatum voluptatibus, distinctio, dignissimos ea, eligendi laborum ipsum.
                        Molestiae sequi, repellendus quaerat adipisci nihil nulla reprehenderit ullam. Odio quasi, expedita vitae qui doloremque impedit quaerat corrupti iure, nemo repudiandae consequuntur? Iusto error, exercitationem laborum dolorem saepe ut omnis.
                        Iure molestiae nostrum explicabo laudantium quidem, totam cumque dolorem ex placeat dicta minima eius adipisci cum, amet temporibus praesentium, odit distinctio ratione maxime commodi obcaecati harum dolor. Perspiciatis, vel illo?
                        Dolor, dolore culpa maxime, deserunt voluptas tenetur voluptatum, error rem vero maiores adipisci quibusdam consequuntur eaque sequi! Architecto itaque, repellat et expedita, error odit assumenda molestiae dicta eius fugiat nobis!
                        Rerum tenetur qui, inventore quo eius suscipit cumque nam nemo eveniet nesciunt alias corporis. Earum voluptatum at laborum ipsum quidem omnis, deserunt, accusamus quibusdam fugiat, magni tenetur aspernatur alias voluptatibus.
                        Numquam eveniet amet magnam porro neque dolore totam, ad odio autem molestiae cum dicta sed, aspernatur, laborum hic obcaecati ipsum nihil soluta quibusdam et rem incidunt ut. Ducimus, quam possimus.
                        Accusantium perferendis ullam ducimus dolorum harum necessitatibus, impedit dolor ex perspiciatis voluptatum tenetur fuga aliquam blanditiis illo maxime iste pariatur? Suscipit quibusdam atque sit aperiam deleniti ducimus delectus sapiente! Sapiente?
                        Ipsa ab accusamus nesciunt sunt rem placeat harum tempore deserunt quo dolores, maiores exercitationem, alias voluptatem in delectus! Minima nulla autem qui veritatis rem, eum similique aspernatur perferendis pariatur adipisci.
                        Commodi dolores pariatur blanditiis suscipit quaerat delectus sit quisquam accusamus! Quidem omnis perferendis repellat, in nulla facilis, laudantium mollitia nesciunt ipsam tenetur cupiditate ex dicta ducimus incidunt sint consequatur adipisci!
                        Tempore id repellendus deserunt soluta eveniet ipsa, perferendis iusto odit eligendi? Voluptatum suscipit libero dolorum veritatis recusandae animi ab quidem incidunt eligendi magni, sit, eum provident blanditiis impedit eveniet quasi?
                        Aperiam, ullam nulla? Deserunt facilis aliquam quisquam mollitia. Vel eos rerum minima facilis architecto ad ipsa, reprehenderit rem maiores dolor cumque vero odio a doloribus harum, natus deserunt totam amet?
                        Labore, voluptate ut reiciendis dicta architecto numquam. Voluptatibus alias itaque vel dolorum, cumque qui omnis reiciendis ad delectus ducimus veniam vitae deleniti, dolor ullam assumenda laborum dignissimos? Rem, qui maxime!
                        Tempora alias molestias, minus, accusamus officiis, eos dolore quas ipsum velit consequatur praesentium quae quia eligendi consectetur? Soluta, officiis saepe dolorum assumenda optio nulla dolore et ullam exercitationem minus natus.
                        Dolor soluta ut aut consequatur possimus blanditiis molestias, vero nesciunt eligendi voluptates enim tenetur est voluptatem, inventore ipsam fugit atque perspiciatis natus magnam veniam accusantium molestiae? Dolorum labore nam facilis!
                        Odit reiciendis tenetur minima vero, ab debitis sed hic porro ipsam voluptates necessitatibus reprehenderit facilis excepturi minus nam vel veniam eos sequi. Ut quod quos aspernatur earum provident itaque aliquid?
                        Deserunt, cumque commodi ratione assumenda adipisci labore. Blanditiis, fuga, illum reiciendis obcaecati sequi sint doloremque illo aliquid esse optio autem, atque fugit facilis perferendis magni aperiam et culpa quam! Aut!
                        In, error harum. Vitae nam iste accusamus! Quam odit magni earum quas minima laboriosam nam, modi iure ex animi commodi incidunt nisi dicta impedit! Alias animi minima deleniti officiis in!
                        Velit amet eligendi reprehenderit odit expedita ut blanditiis repellendus sunt ipsam sint, voluptas, cumque possimus perspiciatis, corrupti ipsum delectus deserunt corporis at minus harum itaque quo? Rerum natus cum ratione?
                        Iste quaerat expedita maxime unde officia? Autem sit doloribus sint. Rem cum molestias dolore quos quidem aut culpa voluptas iure! Vero sit ea aspernatur dolorum incidunt aliquid quisquam ut odio.
                        Facilis quia, facere officiis officia sit veritatis quae, vel veniam deserunt optio adipisci, excepturi commodi modi corrupti possimus. Iure, repellendus obcaecati. Quasi, quae. Eaque asperiores minus aperiam, explicabo minima aut?
                        Tenetur quas incidunt architecto corrupti, praesentium accusamus? Quo eius sint facere, et, eveniet voluptas minus rerum numquam itaque totam, nisi possimus distinctio velit corporis. Cupiditate hic quis minus labore veniam.
                        Similique, illum sit, tempore pariatur voluptatum, quia minima voluptate veniam sequi beatae suscipit dolorem debitis corporis aspernatur commodi accusamus non consectetur optio molestiae inventore tempora fuga perspiciatis culpa sunt? Neque!
                        Optio itaque ea velit maxime voluptas et ut tenetur unde, sunt officiis eligendi omnis mollitia perferendis tempore tempora! Nesciunt, quidem! Quidem ipsam cum provident tenetur explicabo, saepe asperiores adipisci eligendi?
                        Dolore ullam, minima repudiandae sequi temporibus illum saepe maxime dolorem doloribus, deleniti asperiores magni laborum tempore nulla et. Cumque neque perferendis odit quis minima at adipisci porro facilis quod temporibus?
                        Iusto nobis porro quia esse consequatur non pariatur magni tenetur amet est cumque aspernatur eum natus, perspiciatis in voluptate corrupti architecto tempora. Ad, asperiores esse facere iste voluptates est quisquam.
                        Rerum eos reprehenderit repellendus repellat illum numquam quidem laudantium, voluptates labore possimus similique iusto, perferendis eaque sit illo corporis sapiente velit necessitatibus quo porro ex? Necessitatibus quibusdam odio ducimus qui!
                        Voluptatem ducimus iusto maxime reiciendis voluptate nulla eos ipsa quia dignissimos voluptas in suscipit molestias eius, tenetur sunt soluta dolore sapiente ab neque unde! Dolores perferendis autem quidem voluptate dignissimos.
                        Rerum commodi quaerat cupiditate facere, itaque quasi in modi, minima incidunt distinctio esse, facilis ad accusantium eligendi molestias id voluptate? Voluptates mollitia doloribus temporibus. Sed veritatis suscipit mollitia consectetur minus!
                        Sunt, quas molestias labore optio, magni maiores amet ut aliquam odit nobis ipsam reiciendis, molestiae inventore. Quia, veniam magnam molestias cum doloribus sequi consequuntur id fuga quaerat molestiae ipsum in.
                        Ab quasi nisi quibusdam, ut officiis doloribus perspiciatis esse sed deleniti reiciendis placeat dolore unde non porro quos! Facere officiis repellat dolorem distinctio amet beatae itaque quis? Voluptatum, fuga qui?
                        Nesciunt numquam facilis consequatur obcaecati deleniti incidunt quae quod omnis odio placeat dolorem animi nulla laudantium soluta debitis, quidem officia aliquam officiis. Et, ipsa dolorem pariatur laboriosam id aut nulla!
                        Sint soluta, deleniti debitis in ut laborum veritatis dolorum repellendus quasi tempore temporibus, natus dolorem sunt voluptates quia! Vero ipsum eius dolorum et pariatur itaque. Sint dignissimos error fuga ipsum!
                        Iste vitae pariatur architecto. Vitae adipisci voluptate veniam neque inventore dolores soluta, itaque explicabo, labore sit natus deleniti exercitationem quibusdam dignissimos distinctio magni ipsam autem impedit ullam voluptatum enim repellat.
                        Ab, perferendis. Illo vitae ullam suscipit eos! Ullam repellendus maiores hic numquam ab, perspiciatis quisquam soluta dolore debitis qui odit sed magni voluptates harum incidunt fuga accusamus aliquam iste rem!
                        Cum enim odit odio maxime possimus, quam quia nostrum doloremque minima temporibus fuga provident laborum. Error quam dignissimos corporis dolorum facilis sapiente cumque aut sed, facere magni, nostrum, saepe neque.
                        Quia dignissimos consequuntur distinctio est, nobis debitis, quo iusto architecto magni dolorem, dolores deleniti temporibus rem excepturi. Sunt illo quisquam, totam, velit saepe repellendus deleniti dolores quibusdam recusandae laboriosam illum!
                        Cupiditate praesentium, quas iste pariatur aliquid explicabo sit dolorum? Itaque asperiores nihil cumque. Commodi, magni dolorum. Facilis possimus aliquid voluptates veritatis neque quaerat dignissimos rem nesciunt vero, totam, ducimus consequuntur?</div>
                        <SpeedDialComp />
                    </div>
                </div>
            ) }
        </div>
    );
}
 
export default Dashboard;