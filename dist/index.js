"use strict";
// tslint:disable
/**
 * YNAB API Endpoints
 * Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.youneedabudget.com
 *
 * OpenAPI spec version: 1.0.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = exports.utils = exports.API = void 0;
const configuration_1 = require("./configuration");
const CodeGen = require("./api");
const transactionsApi_1 = require("./transactionsApi");
const utils_1 = require("./utils");
exports.utils = utils_1.default;
__exportStar(require("./api"), exports);
/**
 * The YNAB API client
 */
class api {
    /**
     *
     * @param accessToken The access token used for authentication
     * @param endpointUrl The API endpoint URL (Optional)
     */
    constructor(accessToken, endpointUrl = "https://api.youneedabudget.com/v1") {
        this._configuration = new configuration_1.Configuration(accessToken, endpointUrl);
    }
    /**
     * /user endpoints interface
     */
    get user() {
        if (!this._user) {
            this._user = new CodeGen.UserApi(this._configuration);
        }
        return this._user;
    }
    /**
     * /budgets endpoints interface
     */
    get budgets() {
        if (!this._budgets) {
            this._budgets = new CodeGen.BudgetsApi(this._configuration);
        }
        return this._budgets;
    }
    /**
     * /budgets/{budget_id}/accounts endpoints interface
     */
    get accounts() {
        if (!this._accounts) {
            this._accounts = new CodeGen.AccountsApi(this._configuration);
        }
        return this._accounts;
    }
    /**
     * /budgets/{budget_id}/categories endpoints interface
     */
    get categories() {
        if (!this._categories) {
            this._categories = new CodeGen.CategoriesApi(this._configuration);
        }
        return this._categories;
    }
    /**
     * /budgets/{budget_id}/months endpoints interface
     */
    get months() {
        if (!this._months) {
            this._months = new CodeGen.MonthsApi(this._configuration);
        }
        return this._months;
    }
    /**
     * /budgets/{budget_id}/payees endpoints interface
     */
    get payees() {
        if (!this._payees) {
            this._payees = new CodeGen.PayeesApi(this._configuration);
        }
        return this._payees;
    }
    /**
     * /budgets/{budget_id}/payee_locations endpoints interface
     */
    get payeeLocations() {
        if (!this._payeeLocations) {
            this._payeeLocations = new CodeGen.PayeeLocationsApi(this._configuration);
        }
        return this._payeeLocations;
    }
    /**
     * /budgets/{budget_id}/transactions endpoints interface
     */
    get transactions() {
        if (!this._transactions) {
            this._transactions = new transactionsApi_1.TransactionsApi(this._configuration);
        }
        return this._transactions;
    }
    /**
     * /budgets/{budget_id}/scheduled_transactions endpoints interface
     */
    get scheduledTransactions() {
        if (!this._scheduledTransactions) {
            this._scheduledTransactions = new CodeGen.ScheduledTransactionsApi(this._configuration);
        }
        return this._scheduledTransactions;
    }
}
exports.api = api;
exports.API = api;
