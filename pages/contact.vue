<template>
  <div class="page-wrapper">
    <PageHeading>Contact Us</PageHeading>
    <div class="container">
      <p class="copy">
        Please feel free to use our form below if you have any questions or
        comments. You can also reach us at <span>redcabin44@gmail.com</span> for
        booking & info.
      </p>
      <div class="content">
        <form name="contact-form" class="contactForm" method="post" netlify>
          <input type="hidden" name="form-name" value="contact-form" />
          <InputGroup>
            <FormLabel>Name</FormLabel>
            <TextInput v-model="contactForm.name" name="name" required />
          </InputGroup>
          <InputGroup>
            <FormLabel>Email or phone number</FormLabel>
            <TextInput v-model="contactForm.email" name="email" required />
          </InputGroup>
          <InputGroup>
            <FormLabel>Message</FormLabel>
            <TextBox v-model="contactForm.message" name="message" required />
          </InputGroup>

          <AppButton type="submit" class="primary">Send Message</AppButton>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PageHeading from "@/components/PageHeading.vue";
import InputGroup from "@/components/InputGroup.vue";
import FormLabel from "@/components/FormLabel.vue";
import TextInput from "@/components/TextInput.vue";
import TextBox from "@/components/TextBox.vue";
import AppButton from "@/components/AppButton.vue";
import { ref } from "vue";

const contactForm = ref({
  name: null,
  email: null,
  message: null,
});

const title = ref("Whiskey Midnight - Contact");
const description = ref(
  "Contact Whiskey Midnight using this form or the provided email address for questions, booking and information."
);

useHead({
  title,
  meta: [
    {
      name: "description",
      content: description,
    },
  ],
});
</script>

<style lang="scss" scoped>
h2 {
  margin-top: 10rem;
  text-align: center;
  color: var(--color-primary);
}

.container {
  max-width: var(--wrapper-width);
  margin: 0 auto;
  .copy {
    font-family: Roboto;
    margin: 0 auto;
    width: 75%;
    line-height: 1.75;
    font-size: 18px;
    color: var(--copy-white-faded);

    @media screen and (max-width: 556px) {
      width: 98%;
      font-size: 15px;
    }

    span {
      color: var(--orange);
      font-weight: 500;
    }
  }
}

.heading-container {
  text-align: center;
}

.content {
  display: flex;
  margin-top: 2rem;
  @media screen and (max-width: 1200px) {
    flex-wrap: wrap;
    justify-content: center;
  }
  .contactForm {
    width: 100%;
    padding: 2rem 8rem;
    @media screen and (max-width: 1200px) {
      width: 70%;
      order: 2;
      padding: 0;
    }
    @media screen and (max-width: 556px) {
      width: 100%;
    }
  }

  img {
    height: 400px;
    @media screen and (max-width: 1200px) {
      height: auto;
      width: 70%;
      margin-bottom: 4rem;
      border-radius: 10px;
    }
    @media screen and (max-width: 400px) {
      width: 100%;
    }
  }
}

.page-wrapper {
  @media screen and (max-width: 1024px) {
    padding-bottom: 8rem;
  }
}

.hidden {
  display: none;
}
</style>
