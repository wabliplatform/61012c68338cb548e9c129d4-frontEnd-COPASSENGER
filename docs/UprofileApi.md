# TempApi.UprofileApi

All URIs are relative to *https://83.212.100.226:6004/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createuprofile**](UprofileApi.md#createuprofile) | **POST** /uprofile | Creates the data
[**deleteuprofile**](UprofileApi.md#deleteuprofile) | **DELETE** /uprofile/{uprofileId} | Delete the element
[**getAlluprofile**](UprofileApi.md#getAlluprofile) | **GET** /uprofile/getAll | Get all the data
[**getByParamsuprofile**](UprofileApi.md#getByParamsuprofile) | **GET** /uprofile/getByParams | Get all the data based on user query
[**getuprofile**](UprofileApi.md#getuprofile) | **GET** /uprofile/{uprofileId} | Get the element
[**updateuprofile**](UprofileApi.md#updateuprofile) | **PUT** /uprofile/{uprofileId} | Updates the element



## createuprofile

> Uprofile createuprofile(uprofile)

Creates the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.UprofileApi();
let uprofile = new TempApi.Uprofile(); // Uprofile | data to be created
apiInstance.createuprofile(uprofile, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uprofile** | [**Uprofile**](Uprofile.md)| data to be created | 

### Return type

[**Uprofile**](Uprofile.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteuprofile

> deleteuprofile(uprofileId)

Delete the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.UprofileApi();
let uprofileId = "uprofileId_example"; // String | the Id parameter
apiInstance.deleteuprofile(uprofileId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uprofileId** | **String**| the Id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAlluprofile

> [Uprofile] getAlluprofile()

Get all the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.UprofileApi();
apiInstance.getAlluprofile((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Uprofile]**](Uprofile.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getByParamsuprofile

> [Uprofile] getByParamsuprofile(filter)

Get all the data based on user query

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.UprofileApi();
let filter = "filter_example"; // String | the query based on which the search is performed
apiInstance.getByParamsuprofile(filter, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| the query based on which the search is performed | 

### Return type

[**[Uprofile]**](Uprofile.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getuprofile

> Uprofile getuprofile(uprofileId)

Get the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.UprofileApi();
let uprofileId = "uprofileId_example"; // String | the Id parameter
apiInstance.getuprofile(uprofileId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uprofileId** | **String**| the Id parameter | 

### Return type

[**Uprofile**](Uprofile.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateuprofile

> Uprofile updateuprofile(uprofileId, opts)

Updates the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.UprofileApi();
let uprofileId = "uprofileId_example"; // String | the Id parameter
let opts = {
  'uprofile': new TempApi.Uprofile() // Uprofile | data to be updated
};
apiInstance.updateuprofile(uprofileId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uprofileId** | **String**| the Id parameter | 
 **uprofile** | [**Uprofile**](Uprofile.md)| data to be updated | [optional] 

### Return type

[**Uprofile**](Uprofile.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

