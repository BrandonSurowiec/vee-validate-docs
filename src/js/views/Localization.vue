<template>
    <div>
        <h2 id="translation" class="title is-4"><a href="#translation">Translation</a></h2>
        <p>
            This plugin only comes with English messages to keep things small, but it was built with flexible message generation in mind.
            <br>
            The <a href="https://github.com/logaretm/vee-validate/blob/master/dist/locale/en.js" class="link" target="github">English messages file</a> is an example on how you would structure those messages.
            Then you may want to update the validator dictionary, which should happen once in your app startup. still you may update them whenever you want in any point of your app, review the <router-link :to="{ name: 'rules', hash: '#custom-messages' }" class="link">custom messages</router-link> here.
        </p>
        <h2 id="attributes-data-as" class="title is-4"><a href="#attributes-data-as">Attributes (data-as)</a></h2>
        <p>
            Seeing 'first_name' in your error messages can't be very good for your user experience, this plugin offer a couple of solutions:

            You can use the <code>data-as</code> attribute on your field and give it a better name for your users, it would look like this:
            <code-block class="language-html">
                &lt;input v-validate data-rules=&quot;alpha|min:3&quot; data-as=&quot;First Name&quot; name=&quot;first_name&quot; type=&quot;text&quot;&gt;
            </code-block>

            Now when any error message is generated for this input will use the <code>data-as</code> value instead of the actual field name. this is also the same for binding expressions.
            While this is very useful for simple setups and displaying localized names, you might want to check the approach below.
        </p>
        <h2 id="attributes-dictionary" class="title is-4"><a href="#attributes-dictionary">Attributes (Dictionary)</a></h2>
        <p>
            All validators have access to a simple dictionary that is shared between all of them, this dictionary contains localized error messages and attributes, if the validator finds a localized attribute name for that field it will be used instead of the field name.
            Pretty much like <code>data-as</code> but <code>data-as</code> takes priorty if both are found.
        </p>
        <p>
            Here is a little code example on how would you add support for your localized messages and attributes. Note that this is the entry point of your application.
        </p>
        <code-block class="language-javascript">
            import Vue from 'vue';
            import VeeValidate from 'vee-validate';
            import messagesAr from './strings/validator/messages/ar.js';
            import attributesAr from './strings/validator/attributes/ar.js';
            import attributesEn from './strings/validator/attributes/en.js';

            // Pass options to make all validators use the arabic language, also merge the english and arabic attributes with the internal dictionary.
            // You can still modify each validator locale indvidually via the 'setLocale' on the validator instance.
            Vue.use(VeeValidate, {
                locale: 'ar',
                dictionary: { // dictionary object
                    en: {  // locale key
                        attributes: attributesEn // English attributes
                    }
                    ar: {   // locale key
                        messages: messagesAr,   // Arabic messages
                        attributes: attributesAr  // Arabic attributes
                    }
                }
            });


            new Vue({
                el: '#app',
                data: {
                    // Some Data ...
                },
                methods {
                    // Cool methods ...
                }
            });
        </code-block>
        <note>
            You can still modify the default language for each validator individually via the <code>setLocale</code> method on the validator instance.
            And you can also switch the language for all future validators (not created yet) via the <code>setDefaultLocale</code> static method on the Validator class.
        </note>
        <div>
            A working example can be found <router-link class="link" :to="{ name: 'examples', hash: '#locale-example' }">here</router-link>.
        </div>
        <h2 id="localized-files" class="title is-4"><a href="#localized-files">Localized Files</a></h2>
        <p>
            In the <a class="link" href="https://github.com/logaretm/vee-validate/tree/master/dist/locale" target="github"><code class="inline">dist/locale</code></a> directory of this plugin, is a collection of localized files.
            If you can't find your locale, you could help this plugin by contributing a localized version to the <a href="https://github.com/logaretm/vee-validate" class="link" target="github">repo</a>. I will happily accept it.
        </p>
        <b class="important">Available Locales:</b>
        <ul class="list-circle">
            <li><a class="link" href="https://github.com/logaretm/vee-validate/blob/master/dist/locale/en.js" target="github">English</a></li>
            <li><a class="link" href="https://github.com/logaretm/vee-validate/blob/master/dist/locale/ar.js" target="github">Arabic</a></li>
            <li><a class="link" href="https://github.com/logaretm/vee-validate/blob/master/dist/locale/es.js" target="github">Spanish</a> by <a class="link" href="https://github.com/ClaudioEyzaguirre" target="github">@ClaudioEyzaguirre</a></li>
            <li><a class="link" href="https://github.com/logaretm/vee-validate/blob/master/dist/locale/pt_BR.js" target="github">Brazilian Portuguese</a> by <a class="link" href="https://github.com/edbizarro" target="github">@edbizarro</a></li>
            <li><a class="link" href="https://github.com/logaretm/vee-validate/blob/master/dist/locale/fi.js" target="github">Finnish</a> by <a class="link" href="https://github.com/anttisand" target="github">@anttisand</a></li>
            <li><a class="link" href="https://github.com/logaretm/vee-validate/blob/master/dist/locale/de.js" target="github">German</a> by <a class="link" href="https://github.com/kayschima" target="github">@kayschima</a></li>
            <li><a class="link" href="https://github.com/logaretm/vee-validate/blob/master/dist/locale/fr.js" target="github">French</a> by <a class="link" href="https://github.com/thierrymichel" target="github">@thierrymichel</a></li>
            <li><a class="link" href="https://github.com/logaretm/vee-validate/blob/master/dist/locale/vi.js" target="github">Vietnamese</a> by <a class="link" href="https://github.com/imcvampire" target="github">@imcvampire</a></li>
            <li><a class="link" href="https://github.com/logaretm/vee-validate/blob/master/dist/locale/it.js" target="github">Italian</a> by <a class="link" href="https://github.com/ionut-tanasa" target="github">@ionut-tanasa</a></li>
            <li><a class="link" href="https://github.com/logaretm/vee-validate/blob/master/dist/locale/nl.js" target="github">Dutch</a> by <a class="link" href="https://github.com/Woutje99" target="github">@Woutje99</a></li>
            <li><a class="link" href="https://github.com/logaretm/vee-validate/blob/master/dist/locale/el.js" target="github">Greek</a> by <a class="link" href="https://github.com/rousos87" target="github">@rousos87</a></li>
            <li><a class="link" href="https://github.com/logaretm/vee-validate/blob/master/dist/locale/id.js" target="github">Indonesian</a> by <a class="link" href="https://github.com/gunturaf" target="github">@gunturaf</a></li>
            <li><a class="link" href="https://github.com/logaretm/vee-validate/blob/master/dist/locale/da.js" target="github">Danish</a> by <a class="link" href="https://github.com/wolthers" target="github">@wolthers</a></li>
            <li><a class="link" href="https://github.com/logaretm/vee-validate/blob/master/dist/locale/zh_CN.js" target="github">Chinese</a> by <a class="link" href="https://github.com/zppro" target="github">@zppro</a></li>
            <li><a class="link" href="https://github.com/logaretm/vee-validate/blob/master/dist/locale/pl.js" target="github">Polish</a> by <a class="link" href="https://github.com/murbanowicz" target="github">@murbanowicz</a></li>
        </ul>
    </div>
</template>
