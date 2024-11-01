<?php if ($lc_embedid) { ?>
<!-- Zebchat widget -->
<script type="text/javascript">
	(function(w, d, s, u) {
		w.id = <?php echo $lc_embedid;?>; w.lang = '<?php echo $lc_set_lang;?>'; w.cName = ''; w.cEmail = ''; w.cMessage = ''; w.lcjUrl = u;
		var h = d.getElementsByTagName(s)[0], j = d.createElement(s);
		j.async = true; j.src = 'https://app.zebchat.com/js/widget.js';
		h.parentNode.insertBefore(j, h);
	})(window, document, 'script', 'https://app.zebchat.com/');
</script>
<div id="zeb-chat-container"></div>
<!-- end Zebchat widget -->
<?php } ?>