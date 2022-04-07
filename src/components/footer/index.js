import { EmailFooter } from "./emailFooter";
import { GitHubFooter } from "./githubFooter";
import { InstagramFooter } from "./instagramFooter";

export const FooterHome = () => (
    <div className="footer">
        <InstagramFooter />
        <GitHubFooter />
        <EmailFooter />
    </div>
)