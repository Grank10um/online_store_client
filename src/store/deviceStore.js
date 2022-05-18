import {makeAutoObservable} from 'mobx'
import { APARTMENT_ROUTE, CUSTOMER_ROUTE, STORE_ROUTE, TRADES_ROUTE, AMOUNT_ROUTE } from '../utils/consts'

export default class DeviceStore {
    constructor () {
        this._types = [
            {id: 1, name: 'Квартиры', link: APARTMENT_ROUTE},
            {id: 2, name: 'Сделки', link: TRADES_ROUTE},
            {id: 3, name: 'Расчеты', link: AMOUNT_ROUTE},
            {id: 4, name: 'Склад', link: STORE_ROUTE},
            {id: 5, name: 'Клиенты', link: CUSTOMER_ROUTE}
        ]
        this._workTypes = [
            {id: 1, name: 'Материалы'},
            {id: 2, name: 'Техника'},
            {id: 3, name: 'Мебель'},
            {id: 4, name: 'Работы'},
            {id: 5, name: 'Работы outsource'},
            {id: 6, name: 'Прочиее'}
        ]
        this._brands = []
        this._apartments = []
        this._statuses = [
            {id: 1, status_name: 'Материалы'},
            {id: 2, status_name: 'Техника'},
            {id: 3, status_name: 'Мебель'}]
        this._customers = []

        this._selectedStatus={}
        this._selectedBrand={}
        this._selectedType={}
        this._selectedApartment={}
        this._selectedWorkType={}
        this._selectedCustomer={}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setApartments(apartments) {
        this._apartments = apartments
    }
    setStatuses(statuses) {
        this._statuses= statuses
    }
    setWorkTypes(workTypes) {
        this._workTypes=workTypes
    }
    setCustomers(customers) {
        this._customers=customers
    }


    setSelectedType(type) {
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }
    setSelectedApartment(apartment) {
        this._selectedApartment = apartment
    }
    setSelectedStatus(status) {
        this._selectedStatus = status
    }
    setSelectedWorkType(workType) {
        this._selectedWorkType = workType
    }
    setSelectedCustomer(customer) {
        this._selectedCustomer = customer
    }


    get types(){
        return this._types
    }
    get brands() {
        return this._brands 
    }
    get apartments() {
        return this._apartments
    }
    get statuses() {
        return this._statuses
    }
    get workTypes() {
        return this._workTypes
    }
    get customers() {
        return this._customers
    }


    get selectedApartment() {
        return this._selectedApartment
    }
    get selectedBrand() {
        return this._selectedBrand
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedStatus() {
        return this._selectedStatus
    }
    get selectedWorkType() {
        return this._selectedWorkType
    }
    get selectedCustomer() {
        return this._selectedCustomer
    }
}