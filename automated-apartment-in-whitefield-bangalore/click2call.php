<form>
<div class="row m-0 pr-3">

  <div class="px-0">
  <div class="form-group mb-2 mob-ico">
  <img src="img/mobileico.png" alt>
    <input type="text" class="form-control phone-number" id="click2call_cust_text" placeholder="99999 99999">
  </div>
  </div>
  <div class="px-0">
<button type="submit" class="btn btn-primary mb-2 btn-block" id="click2call_submitbtn">Click to Call</button>
</div>
  </div>
  <div id="click2call_success" class="success_C2C" style="display: none;">Call placed.</div>      
      <div id="click2call_failure"  class="failure_C2C" style="display: none;">Failure.</div>
</form>


<script type="text/javascript" src="js/c2cWidget.js"> </script>
<script type="text/javascript">  init("39153de7-f2b2-46a6-84e4-80cb6f338d10","+916366782520","+919391017066")   </script>