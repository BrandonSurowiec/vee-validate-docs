<template>
    <div>
        <h2 id="error-bag" class="title is-4"><a href="#error-bag">ErrorBag</a></h2>
        <p>
            The ErrorBag class is a wrapper around an array, and is standalone and has no dependencies, you can use it in your code for any reason:
            <code-block class="language-javascript">
                import { ErrorBag } from 'vee-validate'; // ES6 Import.
                const bag = new ErrorBag();
            </code-block>
            The internal array contains the error objects, the structure is:
            <code-block class="language-javascript">
                {
                    errors: [
                        { field: 'Field name', msg: 'Error message' },
                        { field: 'Field name', msg: 'Error message' },
                        { field: 'Field name', msg: 'Error message' }
                    ]
                }
            </code-block>
        </p>
        <p>
            <b class="important">Available Methods:</b>
            <ul class="list-circle">
                <li><code class="inline">add(String field, String msg)</code> adds an error object to the internal array.</li>
                <li><code class="inline">all()</code> Gets all messages from the internal array.</li>
                <li><code class="inline">any()</code> Checks if there are any errors.</li>
                <li><code class="inline">clear()</code> Removes all items from the internal array.</li>
                <li><code class="inline">collect(String field)</code> Collects errors associated with a specific field. not passing the field name will group all errors by field name instead.</li>
                <li><code class="inline">count()</code> Gets the length of the internal array. or the number of messages.</li>
                <li><code class="inline">first(String field)</code> Gets the first error message associated with the specified field.</li>
                <li><code class="inline">has(String field)</code> Checks if there is at least one error associated with the specified field.</li>
                <li><code class="inline">remove(String field)</code> Removes all errors for a specified field from the internal array.</li>
            </ul>
            <note>
                All of the methods above accept an optional <code>scope</code> parameter which will limit the method effect to a specific scope. You can read more about scopes <router-link :to="{ name: 'examples', hash: '#scope-example' }">here</router-link>.
            </note>
        </p>
        <h2 id="validator" class="title is-4"><a href="#validator">Validator</a></h2>
        <p>
            The validator is injected to the Vue instance as <code class="inline">$validator</code> automatically.
            However it is also a stand alone class and can be used separately for programmatically validating values.
            The constructor can optionally take an object to map each field name to a set of validations.
            <code-block class="language-javascript">
                import { Validator } from 'vee-validate';
                const validator = new Validator({
                    email: 'required|email',
                    name: 'required|alpha|min:3',
                }); // or Validator.create({ ... });
            </code-block>
            But you can construct the object without passing anything and add the validation rules later.
            <code-block class="language-javascript">
                import { Validator } from 'vee-validate';
                const validator = new Validator();

                validator.attach('email', 'required|email'); // attach field.
                validator.attach('name', 'required|alpha', 'Full Name'); // attach field with display name for error generation.

                validator.detach('email'); // you can also detach fields.
            </code-block>
            After that you can validate values with <code class="inline">validate(field, value)</code> which should return a boolean if all validations pass. Like this:
            <code-block class="language-javascript">
                validator.validate('email', 'foo@bar.com'); // true
                validator.validate('email', 'foo@bar'); // false
            </code-block>
            <note>
                Most validators return a Boolean, however some validators (very few) return a <code>Promise</code> The validator is aware of this and will only return a Promise if at least one validation yields a promise. the promise is resolved to boolean which you can later chain to check your fields.
            </note>
            <br>
            You can validate multiple values at the same time using <code class="inline">validateAll(obj)</code>:
            <code-block class="language-javascript">
                validator.validateAll({
                    email: 'foo@bar.com',
                    name: 'John Snow'
                });
            </code-block>
            Returns true if all values passed validation, false if at least one value failed validation. will return a <code>Promise</code> if at least one field validation rule returned a <code>Promise</code> which is also resolved to a boolean. The ErrorBag will be populated with any errors encountered.
            You can access the <code class="inline">errorBag</code> property directly or using <code class="inline">getErrors()</code>.
            <code-block class="language-javascript">
                var errorBag = validator.errorBag;
                // or
                var errorBag = validator.getErrors();
            </code-block>

            The validator instance can only generate messages for one locale at a time. But you need to use <code class="inline">setLocale</code> method to switch the validator locale.
            <code-block class="language-javascript">
                validator.setLocale('ar');
            </code-block>
            <note>
                Each validator keeps track of its own locale. so be sure to update any instances whenever the language changes.
                For more information about how to overwrite messages and add new ones, please refer to the <router-link :to="{ name: 'rules', hash: 'custom-messages' }" class="link">custom messages</router-link> section.
            </note>
            The Validator class has a static method called <code class="inline">setDefaultLocale(string)</code> which sets the default language for all newly instantiated validators to that language.
            <code-block class="language-javascript">
                import { Validator } from 'vee-validate';

                Validator.setDefaultLocale('ar'); // from now on, all validators that are created will have this locale.
                Validator.create().locale // 'ar';

                Validator.setDefaultLocale(); // resets to english, again for all newly created validators, previously created ones won't be touched.
            </code-block>
        </p>
        <h2 id="validator-example" class="title is-4"><a href="#validator-example">Validator Example</a></h2>
        <p>
            Here is an example of using the validator without the directive, which means you will be responsible for monitoring input changes on your own, and calling the API methods as you see fit.
            This example uses a Vue instance to simplify things, but it can be used in plain JavaScript as well.
        </p>
        <validator-example></validator-example>
    </div>
</template>

<script>
import ValidatorExample from './../components/examples/ValidatorExample.vue';

export default {
    components: {
        ValidatorExample
    }
};
</script>
