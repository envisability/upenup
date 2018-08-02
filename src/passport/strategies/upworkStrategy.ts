/**
 * Module dependencies.
 */
const OAuthStrategy = require("passport-oauth").OAuthStrategy
    , InternalOAuthError = require("passport-oauth").InternalOAuthError;


export interface IUpworkOptions {
    consumerKey: string;
    consumerSecret: string;
    callbackURL: string;

    skipExtendedUserProfile?: boolean;
}

interface IUpworkOptionsInternal extends IUpworkOptions {
    requestTokenURL: string;
    accessTokenURL: string;
    userAuthorizationURL: string;
    signatureMethod: string;
}
/**
 * `Strategy` constructor.
 *
 * Applications must supply a `verify` callback which accepts a `token`,
 * `tokenSecret` and service-specific `profile`, and then calls the `done`
 * callback supplying a `user`, which should be set to `false` if the
 * credentials are not valid.  If an exception occured, `err` should be set.
 *
 * Options:
 *   - `consumerKey`     identifies client to Odesk
 *   - `consumerSecret`  secret used to establish ownership of the consumer key
 *   - `callbackURL`     URL to which Odesk will redirect the user after obtaining authorization
 *
 * Examples:
 *
 *     passport.use(new OdeskStrategy({
 *         consumerKey: '123-456-789',
 *         consumerSecret: 'shhh-its-a-secret'
 *         callbackURL: 'https://www.example.net/auth/odesk/callback'
 *       },
 *       function(token, tokenSecret, profile, done) {
 *         User.findOrCreate(..., function (err, user) {
 *           done(err, user);
 *         });
 *       }
 *     ));
 *
 * @param {Object} options
 * @param {Function} verify
 * @api public
 */
export class UpworkStrategy extends OAuthStrategy {
    public name: string;
    private _options: IUpworkOptionsInternal;
    constructor(options: IUpworkOptions, verify: any) {
        // OAuthStrategy.call(this, options, verify);
        const _options: IUpworkOptionsInternal = {
            ...options,
            requestTokenURL: "https://www.upwork.com/api/auth/v1/oauth/token/request",
            accessTokenURL: "https://www.upwork.com/api/auth/v1/oauth/token/access",
            userAuthorizationURL: "https://www.upwork.com/services/api/auth",
            signatureMethod: "HMAC-SHA1"
        };
        _options.skipExtendedUserProfile = (options.skipExtendedUserProfile === undefined) ? false : options.skipExtendedUserProfile;

        console.log(_options);
        super(_options, verify);

        this._options = _options;
        this.name = "upwork";
    }

    public authenticate(req: any, options: any) {
        // When a user denies authorization on Odesk, they are presented with a link
        // to return to the application in the following format (where xxx is the
        // value of the request token):
        //
        //     http://www.example.com/auth/Odesk/callback?denied=xxx
        //
        // Following the link back to the application is interpreted as an
        // authentication failure.
        if (req.query && req.query.denied) {
            return this.fail();
        }

        // Call the base class for standard OAuth authentication.
        super.authenticate(req, options);
    }


    public userProfile(token: string, tokenSecret: string, params: any, done: any) {
        if (!this._options.skipExtendedUserProfile) {
            this._oauth.get(
                "https://www.upwork.com/api/auth/v1/info.json",
                token, tokenSecret, function (err: any, body: any, res: any) {
                    if (err) { return done(new InternalOAuthError("failed to fetch user profile", err)); }

                    try {
                        const data = JSON.parse(body);
                        console.log(data);
                        const profile = {
                            provider: "odesk",
                            "id": data.auth_user.uid,
                            "name": { "familyName": data.auth_user.last_name, "givenName": data.auth_user.first_name },
                            //              accessToken : token, //i think we don't need to expose this here -- Anatolij
                            //              accessTokenSecret : tokenSecret,
                            ref: data.info.ref,
                            "displayName": data.auth_user.first_name + " " + data.auth_user.last_name,
                            "img": data.info.portrait_50_img,
                            "country": data.info.location.country,
                            "profile": data.info.profile_url,
                            "emails": [{ "value": data.auth_user.mail, type: "work" }],
                            "timezone": data.auth_user.timezone,
                            "timezone_offset": data.auth_user.timezone_offset,
                            "location": data.info.location,
                            "company_url": data.info.company_url
                        };
                        done(undefined, profile);
                    } catch (e) {
                        done(e);
                    }
                });
        } else {
            const profile = {
                provider: this.name,
                id: params.id,
                displayName: params.displayName
            };
            done(undefined, profile);
        }
    }
}
