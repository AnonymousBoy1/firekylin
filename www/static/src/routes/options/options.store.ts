import GeneralStore from './general/general.store';
import ReadingStore from './reading/reading.store';
import TwoFactorAuthStore from './two-factor-auth/two-factor-auth.store';
import LDAPStore from './ldap/ldap.store';
import CommentStore from './comment/comment.store';
import AnalysisStore from './analysis/analysis.store';
import OptionsPushStore from './push/push.store';

class OptionsStore {
    generalStore: GeneralStore;
    readingStore: ReadingStore;
    twoFactorAuthStore: TwoFactorAuthStore;
    ldapStore: LDAPStore;
    commentStore: CommentStore;
    analysisStore: AnalysisStore;
    optionsPushStore: OptionsPushStore;
    constructor() {
        this.generalStore = new GeneralStore();
        this.readingStore = new ReadingStore();
        this.twoFactorAuthStore = new TwoFactorAuthStore();
        this.ldapStore = new LDAPStore();
        this.commentStore = new CommentStore();
        this.analysisStore = new AnalysisStore();
        this.optionsPushStore = new OptionsPushStore();
    }
}

export default OptionsStore;
