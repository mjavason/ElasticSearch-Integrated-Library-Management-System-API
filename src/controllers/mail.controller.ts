import { mailService, userService } from '../services';
import { APP_NAME, SITE_LINK } from '../constants';

class Controller {
  async sendWelcomeMail(email: string, firstName: string, lastName: string, token: string) {
    // Load the email template
    const templatePath = 'src/templates/welcome.html';

    const confirmationLink = `${SITE_LINK}/api/v1/auth/welcome/${token}`;

    // Replace placeholders with actual data
    const data = {
      firstName: firstName,
      lastName: lastName,
      confirmationLink: confirmationLink,
    };
    // Compile the template
    const compiledTemplate = await mailService.renderMailTemplate(templatePath, data);

    if (!compiledTemplate) return false;
    // Send the email
    const info = await mailService.sendMail(
      email,
      compiledTemplate,
      `${APP_NAME} #100DaysOfAPIAwesomeness Welcome`,
    );

    console.log(`#100DaysOfAPIAwesomeness Welcome email sent to: ${email}`);

    return { info };
  }

  // Send the reset email
  async sendPasswordResetEmail(email: string, token: string) {
    const user = await userService.findOne({ email });
    if (!user) {
      console.log(`User with email: ${email} does not exist`);
      return false;
    }

    const resetLink = `${SITE_LINK}/api/v1/auth/reset-password/${token}`;
    const data = {
      email: email,
      passwordResetLink: resetLink,
    };

    const renderedEmail = await mailService.renderMailTemplate(
      'src/templates/password_reset.html',
      data,
    );

    if (!renderedEmail) {
      console.log('Mail template not found');
      return false;
    }

    // Send the email
    const info = await mailService.sendMail(email, renderedEmail, 'Password reset');

    console.log(`Password reset email sent to: ${email}`);

    return { info };
  }

  async sendMagicLinkEmail(email: string, token: string) {
    // Load the email template
    const templatePath = 'src/templates/magic_link.html';

    const magicLink = `${SITE_LINK}/api/v1/auth/magic/${token}`;

    // Replace placeholders with actual data
    const data = {
      magicLink: magicLink,
    };
    // Compile the template
    const compiledTemplate = await mailService.renderMailTemplate(templatePath, data);

    if (!compiledTemplate) return false;
    // Send the email
    const info = await mailService.sendMail(
      email,
      compiledTemplate,
      `${APP_NAME} #100DaysOfAPIAwesomeness`,
    );

    console.log(`#100DaysOfAPIAwesomeness Magic link email sent to: ${email}`);

    return { info };
  }
}

export const mailController = new Controller();
