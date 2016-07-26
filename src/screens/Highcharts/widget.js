export default [{
  "label": "Speed Bus #1",
  "type": "gauge",
  "realtime": true,
  "data": [{
    "qty": 1000,
    "query": "last_value",
    "bucket": "556391a7791aa76a07f0c283",
    "origin": "5563914e791aa76a07f0c27b",
    "variables": ["speed"],
    "timezone": "Asia/Kabul"
  }],
  "display": {
    "gauge_type": "solid",
    "numberformat": 0,
    "unit": "",
    "minimum": "0",
    "maximum": "90",
    "hide_variables": true
  },
  "created_at": "2015-05-26T21:13:47.487Z",
  "updated_at": "2015-09-07T17:30:17.569Z",
  "id": "5564fb9dcf59606b07f9f8b1"
}, {
  "label": "Fuel Bus #1",
  "type": "gauge",
  "realtime": true,
  "data": [{
    "qty": 1000,
    "query": "last_value",
    "bucket": "556391a7791aa76a07f0c283",
    "origin": "5563914e791aa76a07f0c27b",
    "variables": ["fuel_level"],
    "timezone": "Asia/Kabul"
  }],
  "display": {
    "gauge_type": "solid",
    "numberformat": "0.00",
    "unit": "% capacity",
    "minimum": "0",
    "maximum": "100",
    "hide_variables": true
  },
  "created_at": "2015-05-26T23:02:53.315Z",
  "updated_at": "2015-09-07T17:45:07.045Z",
  "id": "5564fb9dcf59606b07f9f8b1"
}, {
  "label": "Speed Bus #2",
  "type": "gauge",
  "realtime": true,
  "data": [{
    "qty": 1000,
    "query": "last_value",
    "bucket": "55660f9dcf59606b07fa5fe5",
    "origin": "556613d2cf59606b07fa6134",
    "variables": ["speed"],
    "timezone": "Asia/Kabul"
  }],
  "display": {
    "gauge_type": "solid",
    "numberformat": "0.0",
    "unit": "mph",
    "minimum": "0",
    "maximum": "95",
    "hide_variables": true
  },
  "created_at": "2015-05-27T19:11:09.560Z",
  "updated_at": "2015-09-07T17:44:09.448Z",
  "id": "556616cdcf59606b07fa6355"
}, {
  "label": "Fuel Bus #2",
  "type": "gauge",
  "realtime": true,
  "data": [{
    "qty": 1000,
    "query": "last_value",
    "bucket": "55660f9dcf59606b07fa5fe5",
    "origin": "556613d2cf59606b07fa6134",
    "timezone": "Asia/Kabul",
    "variables": ["fuel_level"]
  }],
  "display": {
    "gauge_type": "solid",
    "numberformat": "0.00",
    "unit": "% capacity",
    "minimum": "0",
    "maximum": "100",
    "hide_variables": true
  },
  "created_at": "2015-05-27T19:12:08.634Z",
  "updated_at": "2015-09-07T21:22:09.334Z",
  "id": "55661708cf59606b07fa6381"
}]
